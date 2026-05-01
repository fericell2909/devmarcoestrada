import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { useLanguage } from '../hooks/useLanguage';
import { getBlogPosts } from '../hooks/useBlog';
import { useInView } from '../hooks/useInView';

export default function Blog() {
  const { t, locale } = useLanguage();
  const { ref, inView } = useInView();
  const posts = useMemo(() => getBlogPosts(locale), [locale]);
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, [posts]);

  const [activeTag, setActiveTag] = useState('all');

  const filtered = activeTag === 'all'
    ? posts
    : posts.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <Navbar />
      <main>
        <section
          id="blog"
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`section blog-list ${inView ? 'section--visible' : ''}`}
          aria-labelledby="blog-heading"
        >
          <div className="container">
            <div className="section__header">
              <span className="section__tag">{t.blog.tag}</span>
              <h1 id="blog-heading" className="section__title">
                {t.blog.title} <span className="accent">{t.blog.titleAccent}</span>
              </h1>
            </div>

            <div className="blog__filters" role="group" aria-label="Filtros">
              <button
                onClick={() => setActiveTag('all')}
                className={`portfolio__filter ${activeTag === 'all' ? 'portfolio__filter--active' : ''}`}
              >
                {t.blog.filterAll}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`portfolio__filter ${activeTag === tag ? 'portfolio__filter--active' : ''}`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="blog__empty">{t.blog.noPosts}</p>
            ) : (
              <div className="blog__grid">
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} t={t} />
                ))}
              </div>
            )}

            <div className="blog__back">
              <Link to="/" className="btn btn--ghost">
                <ArrowLeft size={16} />
                Inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
