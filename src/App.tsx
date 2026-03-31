// Iron Mãe Landing Page
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuemE } from './components/QuemE';
import { Timeline } from './components/Timeline';
import { Loja } from './components/Loja';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with Video */}
        <Hero />

        {/* About Section */}
        <QuemE />

        {/* Achievements Timeline */}
        <Timeline />

        {/* Store Section */}
        <Loja />
      </main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />
    </div>
  );
}