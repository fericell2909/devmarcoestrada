---
title: "React + TypeScript Patterns I Use in Production"
description: "Practical React and TypeScript patterns from real projects: typed custom hooks, Context without prop drilling, and generic components that scale."
date: "2026-03-20"
cover: "/blog/react-typescript-patterns.png"
tags: ["React", "TypeScript", "Patterns", "Frontend"]
readTime: 8
---

## The Problem with React + TypeScript Tutorials

Most tutorials show React with TypeScript superficially: typing `useState`, passing simple props, done. But real projects surface problems no tutorial covers: complex generic components, Context that starts looking like a Christmas tree of providers, or hooks sharing logic with different types.

These are the patterns I use most, ones that have held up over time in multi-developer projects.

## 1. Custom Hook with Type Inference

The most valuable pattern I can share. Instead of manually typing a hook's return value, let TypeScript infer it:

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

The `as const` at the end converts the array into a typed tuple. When you use the hook:

```typescript
const [theme, setTheme] = useLocalStorage('theme', 'dark');
// theme: string, setTheme: (value: string | ((val: string) => string)) => void
```

TypeScript infers types automatically based on `initialValue`.

## 2. Generic List Component

Avoid duplicating list components for different entities:

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

Usage:

```tsx
<List
  items={projects}
  keyExtractor={(p) => p.id}
  renderItem={(p) => <ProjectCard project={p} />}
  emptyMessage="No projects found"
/>
```

TypeScript infers `p` as type `Project` because `items` is `Project[]`.

## 3. Type-Safe Context Without `| undefined`

The classic Context pattern requires handling `undefined`:

```typescript
// Bad: forces undefined checks everywhere
const ThemeContext = createContext<Theme | undefined>(undefined);

// Good: helper that throws if used outside Provider
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

// Usage:
const [ThemeProvider, useTheme] = createStrictContext<Theme>('Theme');
```

Now `useTheme()` always returns `Theme`, never `undefined`. If someone uses it outside the Provider, they get a clear error in development.

## 4. Discriminated Unions for Loading States

Avoid the anti-pattern of three separate booleans (`isLoading`, `isError`, `isSuccess`):

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

In the component:

```tsx
const { state, execute } = useAsync(fetchProjects);

// Automatic TypeScript narrowing:
if (state.status === 'success') {
  // state.data is available here, properly typed
}
```

No more defensive `data?.projects?.map(...)` everywhere.

## 5. Polymorphic Component with `as` Prop

For UI components that can render as different HTML elements:

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

Usage:

```tsx
<Text>Normal paragraph</Text>
<Text as="h1" className="hero__title">Main heading</Text>
<Text as="span" aria-hidden>Screen-reader-invisible text</Text>
```

Props are typed according to the element: `<Text as="a">` accepts `href`, `<Text as="button">` accepts `onClick`, etc.

## Final Thoughts

These patterns aren't complicated, but they make the difference between a codebase that's maintainable long-term and one that accumulates technical debt. TypeScript is your ally when you use it to express the real contracts in your code, not just to silence errors with `as any`.

Do you use any of these patterns? Have one I didn't cover? I'd love to hear about it.
