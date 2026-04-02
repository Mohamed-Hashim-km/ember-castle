import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary" | "tertiary" | "outline2";
  className?: string;
  "aria-label"?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 py-2 transition-all duration-300 font-medium  disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-white text-[#001446] hover:bg-gray-100", // White button, dark text (as per image)
    outline: "border border-[#FAF5EB] text-[#FAF5EB] hover:bg-[#FAF5EB] hover:text-[#001446]",
    secondary: "bg-[#E2BA86] text-white  hover:bg-[#E2BA86] hover:text-white",
    ghost: "text-[#FAF5EB] hover:text-white bg-transparent",
    tertiary: "bg-[#6B3520] text-[#FEFEFE] disabled:bg-[#6B3520]/50 ",
    outline2: "border border-[#001446] text-[#001446] hover:bg-[#001446] hover:text-[#FAF5EB]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
