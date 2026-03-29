import { Filter } from 'bad-words';
import esWords from 'naughty-words/es.json';

const enFilter = new Filter();

const extraEsWords = [
  // Peru
  'pinga', 'cachero', 'cachera', 'cojudo', 'cojuda', 'conchudo', 'conchuda',
  'conchatumadre', 'csm', 'ctm', 'huevon', 'huevona', 'webon', 'webona',
  'carajo', 'carajada', 'maldita', 'pituco', 'chupamedias', 'zamarro',
  'conchesumadre', 'reconchesumadre', 'pendeja', 'lameculo',
  'huevada', 'awebao', 'churre',
  // Mexico
  'chinga', 'chingada', 'chingado', 'chingon', 'chingar', 'pinche',
  'culero', 'culera', 'mamon', 'mamona', 'mamada', 'pendejada',
  'verga', 'vergon', 'vergudo', 'punal', 'punetas', 'ojete',
  'joto', 'naco', 'naca', 'fregado', 'fregada', 'chingadera',
  'putamadre', 'puto', 'putazo', 'putiza', 'encabronado', 'encabronada',
  // Argentina / Uruguay
  'pelotudo', 'pelotuda', 'boludo', 'boluda', 'forro', 'forra',
  'garcha', 'garchado', 'garchada', 'pajero', 'pajera',
  'ortiva', 'sorete', 'sorongo', 'tarado', 'tarada', 'turro', 'turra',
  'pete', 'petero', 'petera', 'mogolico', 'mogolica', 'trolo', 'trola',
  'cornudo', 'cornuda', 'poronga', 'bolas', 'boludez',
  // Colombia
  'malparido', 'malparida', 'gonorrea', 'hijueputa', 'hijuemadre',
  'hp', 'jueputa', 'monda', 'guevon', 'marica', 'pirobo', 'piroba',
  'desgraciado', 'desgraciada', 'careculo', 'caremonda', 'carepicha',
  'guevonada', 'perratumadre',
  // Chile
  'culiao', 'culiado', 'cualiado', 'culiau', 'culia', 'culiazo',
  'weon', 'weona', 'sacowea', 'conchetumare', 'conchetumadre',
  'reconcha', 'rechucha', 'chucha', 'chuchatumare', 'aweonao',
  'aweonada', 'maraco', 'maracon', 'callampa', 'pichula', 'raja',
  'hueon', 'ahueonao', 'gil', 'penca', 'sacoewea',
  // Venezuela
  'cono', 'conazo', 'mamaguevo', 'mamagueva', 'guevona',
  'pajuo', 'pajua', 'ladilla', 'cachifa', 'vergacion', 'jalabola',
  'guebon', 'guebona',
  // Espana
  'gilipollas', 'capullo', 'soplagaitas', 'soplapollas', 'pollaboba',
  'subnormal', 'imbecil', 'zorra', 'zorro', 'follador', 'follon',
  'follona', 'follar', 'pollon', 'mamonazo',
  // Centroamerica
  'cerote', 'maje', 'picha', 'pichudo', 'pichuda', 'cipote',
  'turca', 'comemierda',
  // Insultos homofobicos / transfobicos / LGBTIQ+
  'maricon', 'maricona', 'mariconazo', 'mariconcito', 'mariconada',
  'joto', 'jota', 'jotito', 'jotita', 'joton', 'jotona',
  'mariposa', 'mariposita', 'mariposon',
  'tortillera', 'machorra', 'machona', 'machorrita',
  'punal', 'punalero', 'punalito',
  'sodomita', 'invertido', 'invertida',
  'afeminado', 'amanerado', 'amaneramiento',
  'trolo', 'trola', 'travelo', 'travesti',
  'muerdealmohadas', 'volteado', 'volteada',
  'raro', 'rarote', 'rarita',
  'loca', 'locaza', 'locazo',
  'playo', 'playa', 'playito',
  'cueco', 'cueca',
  'sarasa', 'sarasita',
  'pato', 'patuleca', 'patuleco',
  'cabro', 'cabra', 'cabrito',
  'hueco', 'hueca',
  'fleto', 'fleta',
  'trucha', 'truchita',
  'cacorro', 'cacorra', 'tumarido',
  'rosquete', 'rosqueton',
  'bugarron', 'bugarra',
  'manflor', 'manflora', 'manflorita',
  'camionera', 'camionero',
  'bollera', 'bollo',
  'nenaza', 'nenazo',
  'marimacho', 'marimacha',
  'arepera', 'arepero',
  'cola', 'colipato',
  'lelo', 'lela',
  'puton', 'putona',
  'zorron', 'zorrona',
  // Slurs LGBTIQ+ en ingles
  'fag', 'faggot', 'faggy', 'fags',
  'dyke', 'dykes',
  'tranny', 'trannies',
  'shemale', 'she-male',
  'ladyboy', 'sissy',
  'homo', 'homos',
  'lesbo', 'lezzie', 'lezbo',
  'queer', 'queers',
  'pansy', 'pansies',
  'fairy', 'fairies',
  'twink', 'nancy', 'nance',
  'sodomite', 'sodomites',
  'battyboy', 'batty',
  'bender', 'poof', 'poofter',
  // General
  'cabronada', 'mierdero', 'mierdosa', 'mierdoso', 'nalgas',
  'perra', 'perro', 'estupido', 'estupida',
  'malnacido', 'malnacida', 'bastarda', 'asqueroso', 'asquerosa',
  'depravado', 'depravada', 'degenerado', 'degenerada', 'puerco', 'puerca',
  'cerdo', 'cerda', 'cochino', 'cochina',
  'prostituto', 'burdel', 'proxeneta', 'rufian',
  'obsceno', 'obscena', 'vulgar', 'soez', 'inmundo', 'inmunda',
];

const esWordList = [...(esWords as string[]), ...extraEsWords].map((w) => w.toLowerCase());
const esWordSet = new Set<string>(esWordList);
const esSubstringList = esWordList.filter((w) => w.length >= 4);

function stripPunctuation(word: string): string {
  return word.replace(/[^a-záéíóúüñ]/gi, '');
}

function normalizeLeetSpeak(word: string): string {
  return word
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/\$/g, 's')
    .replace(/@/g, 'a')
    .replace(/\+/g, 't');
}

function dedup(word: string): string {
  return word.replace(/(.)\1+/g, '$1');
}

function containsSubstring(text: string): boolean {
  const normalized = text.toLowerCase();
  return esSubstringList.some((badWord) => normalized.includes(badWord));
}

export function containsProfanity(text: string): boolean {
  if (enFilter.isProfane(text)) return true;

  const words = text.toLowerCase().split(/\s+/);
  const exactMatch = words.some((word) => {
    const clean = stripPunctuation(word);
    if (esWordSet.has(clean)) return true;
    const leet = stripPunctuation(normalizeLeetSpeak(word));
    if (esWordSet.has(leet)) return true;
    const deduped = dedup(clean);
    if (esWordSet.has(deduped)) return true;
    if (esWordSet.has(dedup(leet))) return true;
    return false;
  });
  if (exactMatch) return true;

  return containsSubstring(stripPunctuation(text));
}
