import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  containerClassName?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, className = "", containerClassName = "", ...props }) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && <label className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-2">{label}</label>}
      <div className="relative">
        <select
          className={`w-full bg-transparent border border-primary p-4 text-primary outline-none focus:outline-none appearance-none rounded-none ${className}`}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="text-primary bg-white">
              {option}
            </option>
          ))}
        </select>
        {/* Kept your original left border, updated to border-primary */}
        <div className="absolute right-0 top-0 bottom-0 w-14 flex items-center justify-center border-l border-primary pointer-events-none">
          {/* Kept your original SVG, updated color to text-primary */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
