import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import { useActiveSection } from '../hooks/useInView';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <a href="#hero" className="navbar__logo" aria-label="Inicio">
        M<span className="accent">E</span>
      </a>

      <nav className="navbar__links" aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className={`navbar__link ${active === item.href.slice(1) ? 'navbar__link--active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        className="navbar__toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav className="navbar__mobile" aria-label="Navegación móvil">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`navbar__mobile-link ${active === item.href.slice(1) ? 'navbar__mobile-link--active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
