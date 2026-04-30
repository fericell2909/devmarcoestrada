import { Code2, Cloud, GraduationCap, ArrowRight, ShoppingCart, Plug, ArrowRightLeft } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Cloud,
  GraduationCap,
  ShoppingCart,
  Plug,
  ArrowRightLeft,
};

export default function Services() {
  const { ref, inView } = useInView();
  const { t, services } = useLanguage();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section services ${inView ? 'section--visible' : ''}`}
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">{t.services.tag}</span>
          <h2 id="services-heading" className="section__title">
            {t.services.title} <span className="accent">{t.services.titleAccent}</span>
          </h2>
        </div>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Code2;
            return (
              <article
                key={service.id}
                className="services__card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="services__card-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <div className="services__card-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="services__cta">
          <a href="#contact" className="btn btn--primary">
            {t.services.cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
