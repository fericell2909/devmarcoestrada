import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import { useLanguage } from '../hooks/useLanguage';
import { getBlogPost } from '../hooks/useBlog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLanguage();

  const post = useMemo(
    () => (slug ? getBlogPost(slug, locale) : null),
    [slug, locale]
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'es' ? 'es-PE' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <>
      <Helmet>
        <title>{post.title} — Marco Estrada</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        {post.cover && <meta property="og:image" content={post.cover} />}
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />
      <main>
        <article className="blog-post">
          {post.cover && (
            <div className="blog-post__cover-wrap">
              <img
                src={post.cover}
                alt={post.title}
                className="blog-post__cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).parentElement!.style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="container">
            <div className="blog-post__header">
              <div className="blog-post__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <h1 className="blog-post__title">{post.title}</h1>

              <div className="blog-post__meta">
                <span className="blog-card__meta-item">
                  <Calendar size={15} />
                  {t.blog.published} {formattedDate}
                </span>
                <span className="blog-card__meta-item">
                  <Clock size={15} />
                  {post.readTime} {t.blog.minRead}
                </span>
              </div>
            </div>

            <div
              className="blog-post__content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="blog-post__footer">
              <Link to="/blog" className="btn btn--ghost">
                <ArrowLeft size={16} />
                {t.blog.backToBlog}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <WhatsAppButton />
    </>
  );
}
