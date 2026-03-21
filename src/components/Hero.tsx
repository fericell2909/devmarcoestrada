import { useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const ROLES = [
  'Full Stack Developer',
  'AWS Lover',
  'CI/CD Enthusiast',
  'FrontEnd & BackeEnd Specialist',
];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = ROLES[roleIdx];
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
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timer = setTimeout(type, deleting ? 45 : 85);
    };

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  const scroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label="Presentación">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Disponible para proyectos remotos
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
          Un{' '}
          <span className="hero__typed accent" ref={typedRef} aria-live="polite" />
          <span className="hero__cursor" aria-hidden="true">|</span>
        </p>

        <p className="hero__bio">
          15+ años construyendo productos digitales robustos y escalables. 
          Apasionado por el código limpio, arquitecturas sólidas y equipos que entregan valor real.
        </p>

        <div className="hero__actions">
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <MessageCircle size={16} />
            Hablemos
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={CONTACT_INFO.linkedin}
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
            <span className="hero__stat-label">Años exp.</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">106</span>
            <span className="hero__stat-label">Repositorios</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">3</span>
            <span className="hero__stat-label">Certificaciones</span>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={scroll}
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
