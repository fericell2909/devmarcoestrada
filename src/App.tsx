import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  );
}
