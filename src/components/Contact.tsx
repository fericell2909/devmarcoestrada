import { useState } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const { ref, inView } = useInView();
  const { t, contactInfo } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section contact ${inView ? 'section--visible' : ''}`}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">{t.contact.tag}</span>
          <h2 id="contact-heading" className="section__title">
            {t.contact.title} <span className="accent">{t.contact.titleAccent}</span>
          </h2>
          <p className="section__subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__list">
              <li>
                <MapPin size={18} className="accent" />
                <span>{contactInfo.location}</span>
              </li>
              <li>
                <Phone size={18} className="accent" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <Mail size={18} className="accent" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>

            <div className="contact__socials">
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-name">{t.contact.nameLabel}</label>
              <input
                id="contact-name"
                className="form__input"
                type="text"
                name="name"
                required
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-email">{t.contact.emailLabel}</label>
              <input
                id="contact-email"
                className="form__input"
                type="email"
                name="email"
                required
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-message">{t.contact.messageLabel}</label>
              <textarea
                id="contact-message"
                className="form__input form__textarea"
                name="message"
                required
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'loading'}
            >
              <Send size={16} />
              {status === 'loading' ? t.contact.sending : t.contact.send}
            </button>
            {status === 'success' && (
              <p className="form__feedback form__feedback--success">{t.contact.success}</p>
            )}
            {status === 'error' && (
              <p className="form__feedback form__feedback--error">{t.contact.error}</p>
            )}
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Marco Estrada López · {t.contact.footer}{' '}
          <span aria-label="amor">♥</span> en Perú
        </p>
      </footer>
    </section>
  );
}
