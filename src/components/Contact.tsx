import { MapPin, Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section contact ${inView ? 'section--visible' : ''}`}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">04. Contacto</span>
          <h2 id="contact-heading" className="section__title">
            Hablemos <span className="accent">pronto</span>
          </h2>
          <p className="section__subtitle">
            ¿Tienes un proyecto en mente? No dudes en contactarme.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__list">
              <li>
                <MapPin size={18} className="accent" />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li>
                <Phone size={18} className="accent" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <Mail size={18} className="accent" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
            </ul>

            <div className="contact__socials">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Formulario oculto temporalmente */}
        </div>
      </div>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Marco Estrada López · Hecho con{' '}
          <span aria-label="amor">♥</span> en Perú
        </p>
      </footer>
    </section>
  );
}
