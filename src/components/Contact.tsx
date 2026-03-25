import { useState } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();
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

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-name">Nombre</label>
              <input
                id="contact-name"
                className="form__input"
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className="form__input"
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                className="form__input form__textarea"
                name="message"
                required
                placeholder="Cuéntame sobre tu proyecto..."
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
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            {status === 'success' && (
              <p className="form__feedback form__feedback--success">
                Mensaje enviado. Te responderé pronto.
              </p>
            )}
            {status === 'error' && (
              <p className="form__feedback form__feedback--error">
                Hubo un error. Intenta de nuevo o contáctame por WhatsApp.
              </p>
            )}
          </form>
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
