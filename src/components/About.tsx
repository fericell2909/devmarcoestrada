import { MapPin, Mail, Phone, Download, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section about ${inView ? 'section--visible' : ''}`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">01. Sobre mí</span>
          <h2 id="about-heading" className="section__title">
            Quién <span className="accent">soy</span>
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
              <span>🇵🇪 Nuevo Chimbote, Perú</span>
            </div>
          </div>

          <div className="about__content">
            <p className="about__description">
              Desarrollador Full Stack Senior con más de 15 años transformando ideas en productos digitales. Domino el ciclo completo de desarrollo — desde frontends con React, Vue.js y TypeScript hasta backends robustos con Laravel, Django, .NET y Node.js. Diseño e implemento arquitecturas cloud en AWS con Lambda, API Gateway, pipelines CI/CD, contenedores Docker y bases de datos relacionales (PostgreSQL, MySQL, SQL Server, Oracle). Certificado AWS Cloud Practitioner y Scrum Developer, con maestría en Gestión de TI y experiencia liderando equipos en entornos ágiles para clientes internacionales.
            </p>
            <p className="about__description">
              Fácil de trabajar en equipo, adaptable y siempre buscando el siguiente reto desafiante.
            </p>

            <ul className="about__info">
              <li>
                <Calendar size={14} />
                <span>29 de Septiembre, 1987</span>
              </li>
              <li>
                <MapPin size={14} />
                <span>Nuevo Chimbote, Perú</span>
              </li>
              <li>
                <Mail size={14} />
                <a href="mailto:info@devmarcoestrada.com">info@devmarcoestrada.com</a>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+51902530468">+51 902 530 468</a>
              </li>
            </ul>

            <div className="about__actions">
              <a
                href="https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/cv_marco_estrada_lopez_2026_spanish.pdf"
                target='_blank'
                rel='noopener noreferrer'
                className="btn btn--primary"
              >
                <Download size={16} />
                Descargar CV
              </a>
              <a href="#contact" className="btn btn--outline">
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
