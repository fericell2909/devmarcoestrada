import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useActiveSection } from '../hooks/useInView';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export default function Navbar({ minimal = false }: { minimal?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale, t, navItems } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleAnchorClick = (href: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const isRouteLink = (href: string) => href.startsWith('/') && !href.startsWith('/#');

  const isActive = (href: string) => {
    if (isRouteLink(href)) return location.pathname === href;
    return active === href.slice(1);
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <Link to="/" className="navbar__logo" aria-label="Inicio">
        M<span className="accent">E</span>
      </Link>

      {!minimal && (
        <nav className="navbar__links" aria-label={t.navbar.mainNav}>
          {navItems.map((item) =>
            isRouteLink(item.href) ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`navbar__link ${isActive(item.href) ? 'navbar__link--active' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleAnchorClick(item.href)}
                className={`navbar__link ${isActive(item.href) ? 'navbar__link--active' : ''}`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>
      )}

      <div className="navbar__actions">
        <button
          className="navbar__lang-toggle"
          onClick={toggleLocale}
          aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          <Globe size={14} />
          {locale === 'es' ? 'EN' : 'ES'}
        </button>

        <button
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.navbar.lightMode : t.navbar.darkMode}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {!minimal && (
          <button
            className="navbar__toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.navbar.closeMenu : t.navbar.openMenu}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {!minimal && open && (
        <nav className="navbar__mobile" aria-label={t.navbar.mobileNav}>
          {navItems.map((item) =>
            isRouteLink(item.href) ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`navbar__mobile-link ${isActive(item.href) ? 'navbar__mobile-link--active' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleAnchorClick(item.href)}
                className={`navbar__mobile-link ${isActive(item.href) ? 'navbar__mobile-link--active' : ''}`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>
      )}
    </header>
  );
}
