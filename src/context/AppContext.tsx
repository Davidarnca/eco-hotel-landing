import React, { createContext, useContext, useState, useEffect } from 'react';
import { HoneyProduct, TourismExperience, HotelRoom, Booking, HiveSensorData, NewsletterSubscriber } from '../types';
import { HONEY_PRODUCTS, EXPERIENCES, HOTEL_ROOMS, HIVE_SENSORS_MOCK } from '../data';

interface CartItem {
  product: HoneyProduct;
  quantity: number;
}

interface AppContextType {
  // Static state
  products: HoneyProduct[];
  experiences: TourismExperience[];
  rooms: HotelRoom[];
  
  // Cart state
  cart: CartItem[];
  addToCart: (product: HoneyProduct, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  
  // Bookings state
  bookings: Booking[];
  addBooking: (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status' | 'userId'>) => Promise<Booking>;
  
  // Realtime hive sensors
  hiveSensors: HiveSensorData[];
  refreshSensors: () => void;
  
  // Newsletter subscribers
  subscribers: NewsletterSubscriber[];
  subscribeToNewsletter: (email: string) => Promise<boolean>;
  
  // Modals controller
  selectedProduct: HoneyProduct | null;
  setSelectedProduct: (product: HoneyProduct | null) => void;
  selectedBookingTarget: { type: 'experience' | 'room'; id: string } | null;
  setSelectedBookingTarget: (target: { type: 'experience' | 'room'; id: string } | null) => void;
  
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  bookingsOpen: boolean;
  setBookingsOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<HoneyProduct[]>(HONEY_PRODUCTS);
  const [experiences] = useState<TourismExperience[]>(EXPERIENCES);
  const [rooms] = useState<HotelRoom[]>(HOTEL_ROOMS);
  
  // Load initial cart and bookings from localStorage for simulation
  const [cart, setCart] = useState<CartItem[]>(() => {
    const local = localStorage.getItem('terra_cart');
    return local ? JSON.parse(local) : [];
  });
  
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const local = localStorage.getItem('terra_bookings');
    // Pre-populate with one historical booking for realism
    return local ? JSON.parse(local) : [
      {
        id: 'booking-hist-01',
        userId: 'user-01',
        userName: 'David Aguilar',
        userEmail: 'davidar25@gmail.com',
        type: 'experience',
        targetId: 'exp-beekeeping',
        targetName: 'Taller de Apicultura de Conservación',
        bookingDate: '2026-06-15',
        guestsCount: 2,
        totalPrice: 100,
        status: 'confirmado',
        createdAt: '2026-05-18T10:30:00Z'
      }
    ];
  });
  
  const [hiveSensors, setHiveSensors] = useState<HiveSensorData[]>(HIVE_SENSORS_MOCK);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  
  // Modals & Panels Active state
  const [selectedProduct, setSelectedProduct] = useState<HoneyProduct | null>(null);
  const [selectedBookingTarget, setSelectedBookingTarget] = useState<{ type: 'experience' | 'room'; id: string } | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);

  // Sync to local storage for premium feel
  useEffect(() => {
    localStorage.setItem('terra_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('terra_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addToCart = (product: HoneyProduct, qty: number = 1) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const nextCart = [...prevCart];
        nextCart[existingIdx] = {
          ...nextCart[existingIdx],
          quantity: Math.min(nextCart[existingIdx].quantity + qty, product.availableQuantity)
        };
        return nextCart;
      }
      return [...prevCart, { product, quantity: qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(quantity, item.product.availableQuantity)) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addBooking = async (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status' | 'userId'>) => {
    // Simulator for Firebase/Supabase latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const newBooking: Booking = {
      ...bookingData,
      id: `booking-${Date.now()}`,
      userId: 'user-02', // Simulated auth user ID
      status: 'pendiente', // standard initial status
      createdAt: new Date().toISOString()
    };
    
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  // Simulate remote socket update or telemetry sync
  const refreshSensors = () => {
    setHiveSensors((prev) =>
      prev.map((sensor) => {
        // Vary values slightly to simulate fresh physical feed
        const tempVariation = (Math.random() - 0.5) * 0.4;
        const humVariation = (Math.random() - 0.5) * 0.8;
        const honeyVariation = Math.random() > 0.7 ? 0.1 : 0;
        
        return {
          ...sensor,
          temperature: parseFloat((sensor.temperature + tempVariation).toFixed(1)),
          humidity: parseFloat((sensor.humidity + humVariation).toFixed(1)),
          honeyLevel: parseFloat((sensor.honeyLevel + honeyVariation).toFixed(1)),
          lastSync: 'Hace un momento'
        };
      })
    );
  };

  const subscribeToNewsletter = async (email: string) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const alreadySubscribed = subscribers.some((sub) => sub.email.toLowerCase() === email.toLowerCase());
    if (alreadySubscribed) return false;

    const newSubscriber: NewsletterSubscriber = {
      id: `sub-${Date.now()}`,
      email: email,
      subscribedAt: new Date().toISOString(),
      active: true
    };
    setSubscribers((prev) => [...prev, newSubscriber]);
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        products,
        experiences,
        rooms,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartQuantity,
        bookings,
        addBooking,
        hiveSensors,
        refreshSensors,
        subscribers,
        subscribeToNewsletter,
        selectedProduct,
        setSelectedProduct,
        selectedBookingTarget,
        setSelectedBookingTarget,
        cartOpen,
        setCartOpen,
        bookingsOpen,
        setBookingsOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
