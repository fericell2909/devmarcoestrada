---
title: "Patrones React + TypeScript que uso en producción"
description: "Patrones prácticos de React con TypeScript que aplico en proyectos reales: custom hooks tipados, Context sin prop drilling, y componentes genéricos que escalan."
date: "2026-03-20"
cover: "/blog/react-typescript-patterns.png"
tags: ["React", "TypeScript", "Patrones", "Frontend"]
readTime: 8
---

## El problema con los tutoriales de React + TypeScript

La mayoría de tutoriales muestran React con TypeScript de forma superficial: tipar `useState`, pasar props simples, y listo. Pero en proyectos reales aparecen problemas que ningún tutorial cubre: componentes genéricos complejos, Context que empieza a verse como un árbol de Navidad de providers, o hooks que comparten lógica pero con tipos distintos.

Estos son los patrones que más uso y que han resistido el paso del tiempo en proyectos con múltiples desarrolladores.

## 1. Custom Hook con inferencia de tipos

El patrón más valioso que puedo compartir. En lugar de tipar manualmente el retorno de un hook, deja que TypeScript lo infiera:

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}
```

El `as const` al final convierte el array en una tupla tipada. Cuando uses el hook:

```typescript
const [theme, setTheme] = useLocalStorage('theme', 'dark');
// theme: string, setTheme: (value: string | ((val: string) => string)) => void
```

TypeScript infiere los tipos automáticamente basándose en `initialValue`.

## 2. Componente genérico para listas

Evita duplicar componentes de lista para diferentes entidades:

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
  emptyMessage?: string;
}

function List<T>({ items, renderItem, keyExtractor, emptyMessage = 'No items' }: ListProps<T>) {
  if (items.length === 0) {
    return <p className="list__empty">{emptyMessage}</p>;
  }

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}
```

Uso:

```tsx
<List
  items={projects}
  keyExtractor={(p) => p.id}
  renderItem={(p) => <ProjectCard project={p} />}
  emptyMessage="No hay proyectos"
/>
```

TypeScript infiere que `p` es de tipo `Project` porque `items` es `Project[]`.

## 3. Context con tipo seguro y sin `| undefined`

El patrón clásico de Context requiere manejar el caso `undefined`:

```typescript
// Mal: obliga a verificar undefined en cada uso
const ThemeContext = createContext<Theme | undefined>(undefined);

// Bien: helper que lanza error si se usa fuera del Provider
function createStrictContext<T>(displayName: string) {
  const Context = createContext<T | undefined>(undefined);
  
  function useContext() {
    const value = React.useContext(Context);
    if (value === undefined) {
      throw new Error(`use${displayName} must be used within ${displayName}Provider`);
    }
    return value;
  }
  
  return [Context.Provider, useContext] as const;
}

// Uso:
const [ThemeProvider, useTheme] = createStrictContext<Theme>('Theme');
```

Ahora `useTheme()` siempre retorna `Theme`, nunca `undefined`. Si alguien lo usa fuera del Provider, recibe un error claro en desarrollo.

## 4. Discriminated Unions para estados de carga

Evita el anti-patrón de tres booleans separados (`isLoading`, `isError`, `isSuccess`):

```typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function useAsync<T>(asyncFn: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' });

  const execute = async () => {
    setState({ status: 'loading' });
    try {
      const data = await asyncFn();
      setState({ status: 'success', data });
    } catch (e) {
      setState({ status: 'error', error: String(e) });
    }
  };

  return { state, execute };
}
```

En el componente:

```tsx
const { state, execute } = useAsync(fetchProjects);

// TypeScript narrowing automático:
if (state.status === 'success') {
  // state.data está disponible aquí, tipado correctamente
}
```

No más `data?.projects?.map(...)` defensivo por todas partes.

## 5. Componente polimórfico con `as` prop

Para componentes de UI que pueden renderizar como diferentes elementos HTML:

```typescript
type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

function Text<E extends React.ElementType = 'p'>({
  as,
  ...props
}: PolymorphicProps<E>) {
  const Component = as ?? 'p';
  return <Component {...props} />;
}
```

Uso:

```tsx
<Text>Párrafo normal</Text>
<Text as="h1" className="hero__title">Título principal</Text>
<Text as="span" aria-hidden>Texto invisible para SR</Text>
```

Los props son tipados según el elemento: `<Text as="a">` acepta `href`, `<Text as="button">` acepta `onClick`, etc.

## Reflexión final

Estos patrones no son complicados, pero marcan la diferencia entre un codebase que se puede mantener a largo plazo y uno que acumula deuda técnica. TypeScript es tu aliado cuando lo usas para expresar los contratos reales del código, no solo para silenciar errores con `as any`.

¿Usas alguno de estos patrones? ¿Tienes uno que no cubra aquí? Me interesa saberlo.
