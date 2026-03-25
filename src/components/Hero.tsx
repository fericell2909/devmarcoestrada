import { useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const { t, locale, contactInfo } = useLanguage();

  useEffect(() => {
    const roles = t.hero.roles;
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIdx];
      const el = typedRef.current;
      if (!el) return;

      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      timer = setTimeout(type, deleting ? 45 : 85);
    };

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, [locale, t.hero.roles]);

  const scroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label={t.hero.presentation}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {t.hero.badge}
        </div>

        <div className="hero__avatar-wrap">
          <img
            src="https://avatars.githubusercontent.com/u/5255269?v=4"
            alt="Marco Estrada Lopez"
            className="hero__avatar"
            width={120}
            height={120}
          />
          <div className="hero__avatar-ring" aria-hidden="true" />
        </div>

        <h1 className="hero__name">
          Marco Estrada <span className="accent">López</span>
        </h1>

        <p className="hero__role">
          {t.hero.rolePrefix}{' '}
          <span className="hero__typed accent" ref={typedRef} aria-live="polite" />
          <span className="hero__cursor" aria-hidden="true">|</span>
        </p>

        <p className="hero__bio">{t.hero.bio}</p>

        <div className="hero__actions">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <MessageCircle size={16} />
            {t.hero.cta}
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">15+</span>
            <span className="hero__stat-label">{t.hero.statYears}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">106</span>
            <span className="hero__stat-label">{t.hero.statRepos}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">3</span>
            <span className="hero__stat-label">{t.hero.statCerts}</span>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={scroll}
        aria-label={t.hero.scrollLabel}
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
