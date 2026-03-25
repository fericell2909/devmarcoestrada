import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView();
  const { t, projects } = useLanguage();

  const FILTERS = [
    { label: t.portfolio.filterAll, value: 'all' },
    { label: t.portfolio.filterWeb, value: 'web' },
    { label: t.portfolio.filterEcommerce, value: 'ecommerce' },
    { label: t.portfolio.filterWordpress, value: 'wordpress' },
  ];

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section portfolio ${inView ? 'section--visible' : ''}`}
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">{t.portfolio.tag}</span>
          <h2 id="portfolio-heading" className="section__title">
            {t.portfolio.title} <span className="accent">{t.portfolio.titleAccent}</span>
          </h2>
        </div>

        <div className="portfolio__filters" role="group" aria-label={t.portfolio.filtersLabel}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`portfolio__filter ${activeFilter === f.value ? 'portfolio__filter--active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={`${t.portfolio.screenshotOf} ${project.title}`}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`${t.portfolio.viewProject} ${project.title}`}
                  >
                    <ExternalLink size={20} />
                    {t.portfolio.viewProject}
                  </a>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
