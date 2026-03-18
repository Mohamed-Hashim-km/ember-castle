import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  labelClassName?: string;
  error?: string;
}

export default function Input({ label, required, className = "", labelClassName = "", error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className={`text-primary text-sm md:text-base font-medium uppercase tracking-wider ${labelClassName}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full bg-transparent 
          border ${error ? "border-red-500" : "border-primary"} 
          p-4 
          text-primary 
          placeholder:text-secondary 
          outline-none focus:outline-none 
          rounded-none
          transition-colors
          ${className}
        `}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
