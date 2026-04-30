import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import { TESTIMONIALS } from '../data';

const VISIBLE = 3;
const INTERVAL = 4000;

export default function Testimonials() {
  const { ref, inView } = useInView();
  const { t, locale } = useLanguage();
  const [start, setStart] = useState(0);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setStart((prev) => prev + 1);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [inView]);

  // Absolute indices — key stability ensures only leftmost exits and rightmost enters
  const indices = Array.from({ length: VISIBLE }, (_, i) => start + i);

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section testimonials ${inView ? 'section--visible' : ''}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">{t.testimonials.tag}</span>
          <h2 id="testimonials-heading" className="section__title">
            {t.testimonials.title} <span className="accent">{t.testimonials.titleAccent}</span>
          </h2>
        </div>

        <div className="testimonials__carousel">
          <AnimatePresence mode="popLayout" initial={false}>
            {indices.map((absIdx) => {
              const item = TESTIMONIALS[absIdx % n];
              const text = locale === 'en' && item.textEn ? item.textEn : item.text;
              return (
                <motion.article
                  key={absIdx}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="testimonials__card"
                >
                  <Quote size={20} className="testimonials__quote-icon" aria-hidden="true" />
                  <p className="testimonials__text">{text}</p>
                  <div className="testimonials__author">
                    {item.linkedinUrl ? (
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="testimonials__avatar-link"
                        aria-label={`LinkedIn de ${item.name}`}
                      >
                        {item.avatar
                          ? <img src={item.avatar} alt={item.name} className="testimonials__avatar" loading="lazy" />
                          : <div className="testimonials__avatar testimonials__avatar--placeholder">{item.name.charAt(0)}</div>
                        }
                      </a>
                    ) : item.avatar ? (
                      <img src={item.avatar} alt={item.name} className="testimonials__avatar" loading="lazy" />
                    ) : (
                      <div className="testimonials__avatar testimonials__avatar--placeholder">{item.name.charAt(0)}</div>
                    )}
                    <div>
                      {item.linkedinUrl ? (
                        <a
                          href={item.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="testimonials__name testimonials__name--link"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="testimonials__name">{item.name}</span>
                      )}
                      <span className="testimonials__role">
                        {item.role}{item.company ? ` · ${item.company}` : ''}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="testimonials__dots" aria-hidden="true">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`testimonials__dot ${i === start % n ? 'testimonials__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
