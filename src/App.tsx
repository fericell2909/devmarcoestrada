import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <SEOHead />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
