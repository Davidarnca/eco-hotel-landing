import { AppProvider} from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HoneySection } from './components/HoneySection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { HotelSection } from './components/HotelSection';
import { BeekeepingTelemetry } from './components/BeekeepingTelemetry';
import { BentoGallery } from './components/BentoGallery';
import { Footer } from './components/Footer';

// Modales y Drawers Globales
import { ProductQuickView } from './components/ProductQuickView';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { BookingsDrawer } from './components/BookingsDrawer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <AppProvider>
      <div className="bg-surface text-on-surface min-h-screen font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed antialiased">
        <Navbar />
        
        <main>
          <Hero />
          <HoneySection />
          <ExperiencesSection />
          <HotelSection />
          <BeekeepingTelemetry />
          <BentoGallery />
        </main>
        
        <Footer />

        <ProductQuickView />
        <BookingModal />
        <CartDrawer />
        <BookingsDrawer />
        <WhatsAppButton />
      </div>
    </AppProvider>
  );
}