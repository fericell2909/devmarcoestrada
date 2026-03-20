import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__bg" aria-hidden="true">
        <div className="not-found__grid" />
        <div className="not-found__orb not-found__orb--1" />
        <div className="not-found__orb not-found__orb--2" />
      </div>

      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">
          Página no <span className="accent">encontrada</span>
        </h1>
        <p className="not-found__text">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            <Home size={16} />
            Volver al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn--ghost"
          >
            <ArrowLeft size={16} />
            Regresar
          </button>
        </div>
      </div>
    </section>
  );
}
