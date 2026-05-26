import { AppProvider} from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { BeeWatchingSection } from './components/BeeWatchingSection';
import { HotelSection } from './components/HotelSection';
import { BeekeepingTelemetry } from './components/BeekeepingTelemetry';
import { BentoGallery } from './components/BentoGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modales y Drawers Globales
import { ProductQuickView } from './components/ProductQuickView';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { BookingsDrawer } from './components/BookingsDrawer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { InteractiveBee } from './components/InteractiveBee';

export default function App() {
  return (
    <AppProvider>
      <div className="bg-surface text-on-surface min-h-screen font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed antialiased">
        <Navbar />
        
        <main>
          <Hero />
          <AboutSection />
          <BeeWatchingSection />
          <ExperiencesSection />
          <HotelSection />
          <BeekeepingTelemetry />
          <BentoGallery />
          <ContactSection />
        </main>
        
        <Footer />

        <ProductQuickView />
        <BookingModal />
        <CartDrawer />
        <BookingsDrawer />
        <WhatsAppButton />
        <InteractiveBee />
      </div>
    </AppProvider>
  );
}