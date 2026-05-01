import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';
import type { useLanguage } from '../hooks/useLanguage';

interface BlogCardProps {
  post: BlogPost;
  t: ReturnType<typeof useLanguage>['t'];
}

export default function BlogCard({ post, t }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(
    t.blog.published === 'Publicado el' ? 'es-PE' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__cover-link" tabIndex={-1} aria-hidden>
        <div className="blog-card__cover-wrap">
          <img
            src={post.cover}
            alt={post.title}
            className="blog-card__cover"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </Link>

      <div className="blog-card__body">
        <div className="blog-card__tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="blog-card__description">{post.description}</p>

        <div className="blog-card__meta">
          <span className="blog-card__meta-item">
            <Calendar size={14} />
            {formattedDate}
          </span>
          <span className="blog-card__meta-item">
            <Clock size={14} />
            {post.readTime} {t.blog.minRead}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`} className="blog-card__cta">
          {t.blog.readMore}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
