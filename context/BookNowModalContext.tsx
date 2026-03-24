"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import BookNowModal from "@/components/shared/BookNowModal";

export interface ReservationData {
  location?: string;
  from?: Date;
  to?: Date;
  adults: number;
  children: number;
  roomType?: string;
}

interface BookNowModalContextProps {
  isOpen: boolean;
  reservationData: ReservationData | null;
  openModal: (data?: ReservationData) => void;
  closeModal: () => void;
}

const BookNowModalContext = createContext<BookNowModalContextProps | undefined>(undefined);

export const BookNowModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reservationData, setReservationData] = useState<ReservationData | null>(null);

  const openModal = (data?: ReservationData) => {
    if (data) setReservationData(data);
    else setReservationData(null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setReservationData(null);
  };

  return (
    <BookNowModalContext.Provider value={{ isOpen, reservationData, openModal, closeModal }}>
      {children}
      <BookNowModal />
    </BookNowModalContext.Provider>
  );
};

export const useBookNowModal = () => {
  const context = useContext(BookNowModalContext);
  if (!context) {
    throw new Error("useBookNowModal must be used within a BookNowModalProvider");
  }
  return context;
};
