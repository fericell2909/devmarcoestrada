import { useState, useEffect } from 'react';
import { ExternalLink, X, Github } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import type { Project } from '../types';

function ProjectModal({ project, onClose, t }: {
  project: Project;
  onClose: () => void;
  t: ReturnType<typeof useLanguage>['t'];
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="project-modal__inner"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="project-modal__close"
          onClick={onClose}
          aria-label={t.portfolio.closeModal}
        >
          <X size={20} />
        </button>

        <div className="project-modal__image-wrap">
          <img
            src={project.image}
            alt={`${t.portfolio.screenshotOf} ${project.title}`}
            className="project-modal__image"
          />
        </div>

        <div className="project-modal__body">
          <h3 className="project-modal__title">{project.title}</h3>

          <div className="project-modal__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {project.longDescription && (
            <p className="project-modal__description">{project.longDescription}</p>
          )}

          <div className="project-modal__actions">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <ExternalLink size={16} />
              {t.portfolio.visitSite}
            </a>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <Github size={16} />
                {t.portfolio.viewRepo}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
    <>
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
                    <button
                      className="project-card__link"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`${t.portfolio.viewProject} ${project.title}`}
                    >
                      <ExternalLink size={20} />
                      {t.portfolio.viewProject}
                    </button>
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

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  );
}
