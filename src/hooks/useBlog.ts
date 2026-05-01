import { marked } from 'marked';
import type { BlogPost, Locale } from '../types';

const mdFiles = import.meta.glob('../content/blog/**/*.md', { query: '?raw', eager: true, import: 'default' });

function slugFromPath(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 2];
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  const yamlBlock = match[1];
  const content = match[2];

  for (const line of yamlBlock.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();

    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, ''));
    } else if (!isNaN(Number(val)) && val !== '') {
      data[key] = Number(val);
    } else {
      data[key] = val.replace(/^["']|["']$/g, '');
    }
  }

  return { data, content };
}

function parsePost(raw: string, slug: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: (data.title as string) ?? '',
    description: (data.description as string) ?? '',
    date: (data.date as string) ?? '',
    cover: (data.cover as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    readTime: (data.readTime as number) ?? 5,
    content: marked(content) as string,
  };
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, raw] of Object.entries(mdFiles)) {
    const filename = path.split('/').pop();
    if (filename !== `${locale}.md`) continue;

    const slug = slugFromPath(path);
    posts.push(parsePost(raw as string, slug));
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string, locale: Locale): BlogPost | null {
  const key = `../content/blog/${slug}/${locale}.md`;
  const raw = mdFiles[key];
  if (!raw) return null;
  return parsePost(raw as string, slug);
}
