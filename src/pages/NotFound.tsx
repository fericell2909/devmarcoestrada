import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from '../components/Navbar';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar minimal />
      <section className="not-found">
      <div className="not-found__bg" aria-hidden="true">
        <div className="not-found__grid" />
        <div className="not-found__orb not-found__orb--1" />
        <div className="not-found__orb not-found__orb--2" />
      </div>

      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">
          {t.notFound.title} <span className="accent">{t.notFound.titleAccent}</span>
        </h1>
        <p className="not-found__text">{t.notFound.text}</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            <Home size={16} />
            {t.notFound.goHome}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn--ghost"
          >
            <ArrowLeft size={16} />
            {t.notFound.goBack}
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
