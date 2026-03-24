"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { Button } from "../ui/Button";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { format } from "date-fns";
import { BiChevronDown, BiX } from "react-icons/bi";
import { useBookNowModal } from "@/context/BookNowModalContext";

import { AnimatePresence, motion } from "framer-motion";

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3 } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

const BookingModal = () => {
  const { isOpen, closeModal, reservationData } = useBookNowModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Hardcoded for Ember Castle
  const roomOptions = ["Premium Rooms", "Villa Room 1", "Villa Room 2", "Villa Room 3", "Dormitory Rooms", "Tent"];
  const diningOptions = ["Tulip"];
  const reservationOptions = ["Room Booking", "Dining Reservation", "Spa"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [description, setDescription] = useState("");
  const [preferredFrom, setPreferredFrom] = useState("");
  const [preferredTo, setPreferredTo] = useState("");
  const [reservationType, setReservationType] = useState("Room Booking");
  const [roomType, setRoomType] = useState(roomOptions[0]);
  const [diningOption, setDiningOption] = useState(diningOptions[0]);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [openGuests, setOpenGuests] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);
  const [dateError, setDateError] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(true);
  const [specificSelection, setSpecificSelection] = useState<string | undefined>();
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  // Handle explicit reservationData passed from Context
  useEffect(() => {
    if (isOpen && reservationData) {
      const newDates: Date[] = [];
      if (reservationData.from) newDates.push(reservationData.from);
      if (reservationData.to) newDates.push(reservationData.to);
      setDates(newDates);
      setAdults(reservationData.adults || 1);
      setChildren(reservationData.children || 0);
      if (reservationData.roomType) setRoomType(reservationData.roomType);
    }
  }, [isOpen, reservationData]);

  useEffect(() => {
    const close = () => {
      setOpenGuests(false);
      setOpenDate(false);
    };
    if (openGuests || openDate) {
      window.addEventListener("click", close);
    }
    return () => window.removeEventListener("click", close);
  }, [openGuests, openDate]);

  useEffect(() => {
    if (dates.length > 0 && dates[0]) setPreferredFrom(format(dates[0], "dd / MM / yyyy"));
    if (dates.length > 1 && dates[1]) setPreferredTo(format(dates[1], "dd / MM / yyyy"));
  }, [dates]);

  // Modal scrolling and keydown logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  // --- Date Helpers ---
  const formatDateDigits = (digits: string) => {
    const nums = digits.replace(/\D/g, "").slice(0, 8);
    const parts = [];
    if (nums.length >= 2) {
      parts.push(nums.slice(0, 2));
      if (nums.length >= 4) {
        parts.push(nums.slice(2, 4));
        if (nums.length > 4) parts.push(nums.slice(4));
      } else if (nums.length > 2) parts.push(nums.slice(2));
    } else if (nums.length > 0) parts.push(nums);

    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return `${parts[0]} / ${parts[1]}`;
    return `${parts[0]} / ${parts[1]} / ${parts[2]}`;
  };

  const parseAndValidateDate = (value: string) => {
    const nums = value.replace(/\D/g, "");
    if (nums.length !== 8) return { date: null as Date | null, error: null as string | null };
    const day = parseInt(nums.slice(0, 2), 10);
    const month = parseInt(nums.slice(2, 4), 10);
    const year = parseInt(nums.slice(4), 10);
    const today = new Date();
    const currentYear = today.getFullYear();

    if (month < 1 || month > 12) return { date: null, error: "Invalid month." };
    if (year < currentYear || year > 9999) return { date: null, error: "Invalid year." };

    const candidate = new Date(year, month - 1, day);
    if (candidate.getFullYear() !== year || candidate.getMonth() !== month - 1 || candidate.getDate() !== day) {
      return { date: null, error: "Invalid date." };
    }
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (candidate < todayMidnight) return { date: null, error: "Date cannot be in the past." };

    return { date: candidate, error: null };
  };

  const handlePreferredFromChange = (e: React.ChangeEvent<HTMLInputElement>) => setPreferredFrom(formatDateDigits(e.target.value));
  const handlePreferredToChange = (e: React.ChangeEvent<HTMLInputElement>) => setPreferredTo(formatDateDigits(e.target.value));
  const handlePreferredFromBlur = (e: React.FocusEvent<HTMLInputElement>) => setDateError(parseAndValidateDate(e.target.value).error);
  const handlePreferredToBlur = (e: React.FocusEvent<HTMLInputElement>) => setDateError(parseAndValidateDate(e.target.value).error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!phone || phone.length <= 4) {
      newErrors.phone = "Valid phone number is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    router.push("/thank-you");
    setIsSubmitting(true);
    closeModal();

    window.dispatchEvent(new Event("bookingFormSubmitted"));

    // Capture query params
    const searchParams = new URLSearchParams(window.location.search);
    const paramsObj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      paramsObj[key] = value;
    });

    let specificSelectionValue: string | undefined;
    if (reservationType === "Room Booking" && roomType) {
      specificSelectionValue = roomType;
    } else if (reservationType === "Dining Reservation") {
      specificSelectionValue = "Tulip";
    } else {
      specificSelectionValue = reservationType;
    }
    setSpecificSelection(specificSelectionValue);

    // Construct the payload
    const payload = {
      name,
      email,
      phone,
      reservationType,
      roomType,
      diningOption,
      adults,
      children,
      premise: "Landing Page",
      preferredFrom,
      preferredTo,
      description,
      consent: consentChecked,
      page_url: window.location.href,
      queryParams: paramsObj,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setReservationType("Room Booking");
        setRoomType(roomOptions[0]);
        setDiningOption(diningOptions[0]);
        setAdults(1);
        setChildren(0);
        setDates([]);
        setPreferredFrom("");
        setPreferredTo("");
        setDescription("");
        setConsentChecked(true);
        setDateError(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 h-screen z-[9999999999999999] overflow-auto"
          initial="hidden"
          animate="visible"
          exit="exit"
          data-lenis-prevent
        >
          {/* Backdrop */}
          <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeModal} />

          {/* Modal Content */}
          <motion.div
            variants={cardVariants}
            ref={containerRef}
            className="max-w-5xl mx-auto bg-white h-fit z-[60] my-6 sm:my-10 pb-8 sm:pb-10 relative shadow-2xl"
            data-lenis-prevent
          >
            {/* Close Button */}
            <motion.button
              variants={contentVariants}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-8 w-8 cursor-pointer bg-[#001446] rounded-full flex items-center justify-center z-50"
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <BiX className="h-6 w-6 text-white" />
            </motion.button>

            <motion.div variants={contentVariants} className="p-6 md:p-10 md:pt-16 pt-16 mt-4">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Name */}
                <Input
                  label="NAME"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  error={errors.name}
                  required
                />

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-primary text-sm md:text-base font-medium tracking-wider mb-2">
                    PHONE <span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={(val) => {
                      setPhone(val);
                      setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    className="w-full"
                    inputClassName="w-full placeholder:text-secondary !text-primary placeholder:text-lg"
                    inputStyle={{
                      width: "100%",
                      background: "transparent",
                      border: "1px solid #1b1b1b",
                      borderRadius: "0px",
                      padding: "28px",
                      fontSize: "16px",
                      color: "#1b1b1b",
                      outline: "none",
                    }}
                    countrySelectorStyleProps={{
                      buttonStyle: {
                        background: "transparent",
                        border: "1px solid #1b1b1b",
                        borderRight: "0px",
                        borderRadius: "0px",
                        padding: "28px",
                        width: "80px",
                        color: "#1b1b1b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      dropdownStyleProps: {
                        style: {
                          maxHeight: "220px",
                          overflowY: "auto",
                          borderRadius: "0px",
                          border: "1px solid #1b1b1b",
                          background: "white",
                          zIndex: 9999,
                          overscrollBehavior: "contain",
                        },
                      },
                    }}
                  />
                  {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
                </div>

                {/* Email */}
                <Input
                  label="EMAIL"
                  type="email"
                  placeholder="Your Email ID"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  error={errors.email}
                  required
                />

                {/* Location / Guests Wrapper */}
                <div className="flex flex-col relative z-20 gap-2">
                  <label className="text-primary text-sm md:text-base font-medium uppercase tracking-wider">NUMBER OF GUESTS</label>
                  <div
                    className="w-full bg-transparent border border-primary p-4 text-primary cursor-pointer flex justify-between items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenGuests(!openGuests);
                      setOpenDate(false);
                    }}
                  >
                    <span className="text-base">
                      {adults < 10 ? `0${adults}` : adults} Adult, {children} Children
                    </span>
                    <BiChevronDown size={20} className={`text-primary transform transition-transform ${openGuests ? "rotate-180" : ""}`} />
                  </div>

                  {/* Guests Dropdown */}
                  {openGuests && (
                    <div
                      className="absolute top-full left-0 w-full bg-white border border-primary border-t-0 z-50 p-6 flex flex-col gap-6 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Adults Row */}
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-medium text-lg">Adults</span>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-8 h-8 text-primary border border-primary flex items-center justify-center hover:bg-[#001446] hover:text-white transition-colors"
                            aria-label="Decrease adults"
                          >
                            -
                          </button>
                          <span className="text-primary w-6 text-center text-lg font-medium">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 text-primary border border-primary flex items-center justify-center hover:bg-[#001446] hover:text-white transition-colors"
                            aria-label="Increase adults"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* Children Row */}
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-medium text-lg">Children</span>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-8 h-8 text-primary border border-primary flex items-center justify-center hover:bg-[#001446] hover:text-white transition-colors"
                            aria-label="Decrease children"
                          >
                            -
                          </button>
                          <span className="text-primary w-6 text-center text-lg font-medium">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 text-primary border border-primary flex items-center justify-center hover:bg-[#001446] hover:text-white transition-colors"
                            aria-label="Increase children"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Reservation Type */}
                <Select
                  label="RESERVATION TYPE"
                  options={reservationOptions}
                  value={reservationType}
                  onChange={(e) => setReservationType(e.target.value)}
                />

                {/* Room Type (Conditional) */}
                {reservationType === "Room Booking" && (
                  <Select label="ROOM TYPE" options={roomOptions} value={roomType} onChange={(e) => setRoomType(e.target.value)} />
                )}


                {/* Preferred Dates */}
                <div
                  className="flex flex-col relative gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDate(!openDate);
                    setOpenGuests(false);
                  }}
                >
                  <label className="text-primary text-sm md:text-base font-medium uppercase tracking-wider">PREFERRED DATES</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="--  /  --  /  ---- "
                      value={preferredFrom}
                      onChange={handlePreferredFromChange}
                      onBlur={handlePreferredFromBlur}
                      className="w-1/2 bg-transparent border border-primary p-4 placeholder:text-secondary text-primary text-center focus:outline-none rounded-none"
                    />
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="--  /  --  /  ----"
                      value={preferredTo}
                      onChange={handlePreferredToChange}
                      onBlur={handlePreferredToBlur}
                      className="w-1/2 bg-transparent border border-primary p-4 placeholder:text-secondary text-primary text-center focus:outline-none rounded-none"
                    />
                  </div>
                  {dateError && <p className="text-sm text-red-600">{dateError}</p>}
                </div>

                {/* Description - Spans Full Width */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-primary text-sm md:text-base font-medium uppercase tracking-wider flex items-end gap-1">
                    DESCRIPTION
                    <span className="text-[11px] opacity-70 normal-case mb-[2px]">(OPTIONAL)</span>
                  </label>
                  <div className="relative w-full">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value.slice(0, 250))}
                      rows={4}
                      maxLength={250}
                      placeholder="Please mention any special requests or preferences..."
                      className="w-full bg-transparent text-primary border border-primary p-4 placeholder:text-secondary outline-none focus:outline-none resize-none rounded-none"
                    ></textarea>
                    <span className="absolute top-2 right-3 text-[10px] text-primary">{description.length}/250</span>
                  </div>
                </div>

                {/* Footer - Consent & Submit - Spans Full Width */}
                <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-4 gap-6">
                  <label className="flex items-center gap-3 cursor-pointer self-start md:self-center">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="w-5 h-5 border border-[#001446] rounded-none checked:bg-[#001446] accent-[#001446] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-primary text-sm ">I give my consent to be contacted via Call, SMS, Email, or WhatsApp</span>
                  </label>

                  <Button
                    type="submit"
                    variant="tertiary"
                    disabled={
                      isSubmitting ||
                      !name.trim() ||
                      !email.trim() ||
                      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
                      !phone ||
                      phone.length <= 4 ||
                      !!dateError
                    }
                    aria-label="Submit booking request"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
