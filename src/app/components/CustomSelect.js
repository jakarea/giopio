'use client'
import { useState, useRef, useEffect } from 'react';

const CustomSelect = ({ label, name, options, placeholder = "Select", value, onChange, className = "", disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue) => {
    if (disabled) return;
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`w-full ${className}`} ref={selectRef}>
      <label htmlFor={name} className="block w-full font-semibold text-sm lg:text-lg text-white font-onest">
        {label}
      </label>

      <div className="relative mt-2.5">
        {/* Custom Select Button */}
        <button
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={`
            w-full text-left px-0 py-2 lg:py-5
            border-b-2 bg-transparent border-white/20
            font-normal text-white text-base lg:text-xl
            focus-visible:outline-none focus:border-[#FF9040]
            xl:pb-6 anim dark:text-white
            flex items-center justify-between
            transition-all duration-300
            ${isOpen ? 'border-[#FF9040]' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <span className={selectedOption ? '' : 'text-white/40'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          {/* Custom Arrow Icon */}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isOpen && !disabled && (
          <div className="
            absolute z-50 w-full mt-2
            bg-[#1B1C31] border border-[#414651] rounded
            shadow-xl max-h-60 overflow-y-auto
          ">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full text-left px-4 py-3
                  text-sm lg:text-base text-white
                  hover:bg-[#FF9040] hover:text-[#101828]
                  transition-colors duration-200
                  ${option.value === value ? 'bg-[#FF9040] text-[#101828]' : ''}
                  anim dark:text-white
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
