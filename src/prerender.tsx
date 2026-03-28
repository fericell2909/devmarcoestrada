import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export async function prerender(data: { url: string }) {
  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <LanguageProvider>
        <SEOHead />
        <MemoryRouter initialEntries={[data.url]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </LanguageProvider>
    </HelmetProvider>
  );

  return {
    html,
    head: {
      lang: 'es',
      title: 'Marco Estrada López — Full Stack Developer',
    },
  };
}
