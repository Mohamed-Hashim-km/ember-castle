import { ReactNode } from "react";

export interface Metadata {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  videoSrc?: string;
  posterSrc?: string;
  description: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface Details {
  view: string;
  size: string;
  occupancy: string;
  bedding: string;
  floor?: string;
}

export interface Amenity {
  icon: ReactNode;
  label: string;
}

export interface CTA {
  backgroundImage: string;
  email: string;
  phone: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

export interface SubRoom {
  title: string;
  description: string[];
  details: Details;
  amenities: Amenity[];
  galleryImages: string[];
  cta: CTA;
}

export interface RoomData {
  title: string;
  slug: string;
  metadata: Metadata;
  coverImage: string;
  image: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  breadcrumbs: Breadcrumb[];
  detailsTitle: string;
  detailsDescription: string[];
  details: Details;
  amenities: Amenity[];
  extraAmenitiesCount?: number;
  subRooms?: SubRoom[];
  cta: CTA;
  galleryImages: string[];
}

export interface Facility {
  icon: ReactNode;
  title: string;
}

export interface AmenityCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface LocationPost {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface InTheLocation {
  title: string;
  description: string;
  posts: LocationPost[];
}

export interface Testimonial {
  text: string;
  author?: string;
  rating?: number;
}

export interface LocationData {
  slug: string;
  metadata: Metadata;
  hero: HeroSection;
  rooms: RoomData[];
  facilities: Facility[];
  amenitiesTitle: string;
  amenitiesDescription: string;
  amenities: AmenityCard[];
  inTheLocation: InTheLocation;
  testimonials: Testimonial[];
}
