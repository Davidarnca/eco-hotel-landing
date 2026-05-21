/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HoneyProduct {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  extendedDescription?: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  availableQuantity: number;
  volume: string; // e.g., "500g", "1kg"
  harvestSeason: string; // e.g., "Primavera", "Otoño"
  organicCertificateUrl?: string;
  nutritionalFacts?: {
    energyCode: string; // e.g., "304 kcal"
    sugar: string;
    protein: string;
  };
}

export type ExperienceCategory = 'hiking' | 'camping' | 'apiculture' | 'wellness';

export interface TourismExperience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  category: ExperienceCategory;
  duration: string; // e.g., "3 horas", "1 noche"
  price: number;
  imageUrl: string;
  capacityMax: number;
  difficulty: 'fácil' | 'moderado' | 'difícil';
  included: string[];
  recommendations: string[];
}

export interface HotelRoom {
  id: string;
  name: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  basePrice: number;
  imageUrl: string;
  capacity: number;
  sizeSqm: number;
  bioclimaticFeatures: string[];
  amenities: string[];
  available: boolean;
}

export type BookingType = 'experience' | 'room';

export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  type: BookingType;
  targetId: string; // can be TourismExperience id or HotelRoom id
  targetName: string; // saved name state
  bookingDate: string; // YYYY-MM-DD
  guestsCount: number;
  totalPrice: number;
  status: 'pendiente' | 'confirmado' | 'cancelado';
  createdAt: string;
  specialRequests?: string;
}

export interface HiveSensorData {
  id: string;
  name: string; // e.g., "Colmena Alerce", "Colmena Roble"
  temperature: number; // in Celsius
  humidity: number; // in percentage
  honeyLevel: number; // estimate in kg
  activityIndex: 'baja' | 'moderada' | 'alta' | 'óptima';
  lastSync: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}
