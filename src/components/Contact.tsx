import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Mail, Phone, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';
import { createContactSchema, type ContactFormData } from '../schemas/contactSchema';

export default function Contact() {
  const { ref, inView } = useInView();
  const { t, contactInfo, locale } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const schema = useMemo(() => createContactSchema(t), [t]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
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

          <form key={locale} className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-name">{t.contact.nameLabel}</label>
              <input
                id="contact-name"
                className={`form__input${errors.name ? ' form__input--error' : ''}`}
                type="text"
                placeholder={t.contact.namePlaceholder}
                {...register('name')}
              />
              {errors.name && (
                <p className="form__feedback form__feedback--error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-email">{t.contact.emailLabel}</label>
              <input
                id="contact-email"
                className={`form__input${errors.email ? ' form__input--error' : ''}`}
                type="email"
                placeholder={t.contact.emailPlaceholder}
                {...register('email')}
              />
              {errors.email && (
                <p className="form__feedback form__feedback--error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="contact-message">{t.contact.messageLabel}</label>
              <textarea
                id="contact-message"
                className={`form__input form__textarea${errors.message ? ' form__input--error' : ''}`}
                placeholder={t.contact.messagePlaceholder}
                {...register('message')}
              />
              {errors.message && (
                <p className="form__feedback form__feedback--error" role="alert">
                  {errors.message.message}
                </p>
              )}
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
