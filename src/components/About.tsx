import { MapPin, Mail, Phone, Download, Calendar } from 'lucide-react';
import cvEnglish from '../assets/hero/cv_english_mel.pdf';
import cvSpanish from '../assets/hero/cv_spanish_mel.pdf';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { ref, inView } = useInView();
  const { t, locale, contactInfo } = useLanguage();

  const cvUrl = locale === 'en' ? cvEnglish : cvSpanish;

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section about ${inView ? 'section--visible' : ''}`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">{t.about.tag}</span>
          <h2 id="about-heading" className="section__title">
            {t.about.title} <span className="accent">{t.about.titleAccent}</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__image-wrap">
            <img
              src="https://avatars.githubusercontent.com/u/5255269?v=4"
              alt="Marco Estrada Lopez"
              className="about__image"
            />
            <div className="about__image-frame" aria-hidden="true" />
            <div className="about__image-tag">
              <span>{t.about.locationTag}</span>
            </div>
          </div>

          <div className="about__content">
            <p className="about__description">{t.about.description1}</p>
            <p className="about__description">{t.about.description2}</p>

            <ul className="about__info">
              <li>
                <Calendar size={14} />
                <span>{t.about.birthDate}</span>
              </li>
              <li>
                <MapPin size={14} />
                <span>{contactInfo.location}</span>
              </li>
              <li>
                <Mail size={14} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Phone size={14} />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
              </li>
            </ul>

            <div className="about__actions">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <Download size={16} />
                {t.about.downloadCv}
              </a>
              <a href="#contact" className="btn btn--outline">
                {t.about.contactMe}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
