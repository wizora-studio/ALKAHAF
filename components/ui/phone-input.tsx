"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown, Search, X, Check } from "lucide-react";
import {
  COUNTRIES,
  POPULAR_COUNTRY_CODES,
  Country,
  findCountryByCode,
  searchCountries,
} from "@/lib/countries";

export interface PhoneInputProps {
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string; // ISO 2 code (e.g. "US", "PK", "GB")
  selectedCountryCode?: string; // Controlled country code
  onCountryChange?: (country: Country) => void;
  placeholder?: string;
  className?: string;
  dropdownClassName?: string;
  searchPlaceholder?: string;
}

export default function PhoneInput({
  id = "phone",
  name = "phone",
  required = false,
  disabled = false,
  defaultValue = "",
  value,
  onChange,
  defaultCountry = "US",
  selectedCountryCode,
  onCountryChange,
  placeholder,
  className = "",
  searchPlaceholder = "Search country or code...",
}: PhoneInputProps) {
  // Determine initial country
  const initialCountry = useMemo(() => {
    return (
      findCountryByCode(selectedCountryCode || defaultCountry) ||
      findCountryByCode("US") ||
      COUNTRIES[0]
    );
  }, [defaultCountry, selectedCountryCode]);

  const [selectedCountry, setSelectedCountry] = useState<Country>(initialCountry);
  const [phoneNumber, setPhoneNumber] = useState(() => {
    if (defaultValue) {
      // If default value starts with +, try to parse
      if (defaultValue.startsWith("+")) {
        // Leave as is or strip dial code
        return defaultValue;
      }
      return defaultValue;
    }
    return "";
  });

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Sync when selectedCountryCode prop changes externally
  useEffect(() => {
    if (selectedCountryCode) {
      const match = findCountryByCode(selectedCountryCode);
      if (match && match.code !== selectedCountry.code) {
        setSelectedCountry(match);
      }
    }
  }, [selectedCountryCode, selectedCountry.code]);

  // Sync with value prop if controlled
  useEffect(() => {
    if (value !== undefined) {
      setPhoneNumber(value);
    }
  }, [value]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard navigation for dropdown
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        phoneInputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Filter countries based on search
  const filteredCountries = useMemo(() => {
    return searchCountries(searchQuery);
  }, [searchQuery]);

  // Popular countries list
  const popularCountries = useMemo(() => {
    return POPULAR_COUNTRY_CODES.map((code) => findCountryByCode(code)).filter(
      (c): c is Country => Boolean(c),
    );
  }, []);

  function handleSelectCountry(country: Country) {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");
    if (onCountryChange) {
      onCountryChange(country);
    }
    phoneInputRef.current?.focus();
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    let inputVal = e.target.value;

    // If user pasted or typed full number with dial code matching current country, clean it
    if (inputVal.startsWith(selectedCountry.dialCode)) {
      inputVal = inputVal.substring(selectedCountry.dialCode.length).trim();
    }

    setPhoneNumber(inputVal);
    if (onChange) {
      const full = inputVal.trim()
        ? `${selectedCountry.dialCode} ${inputVal.trim()}`
        : "";
      onChange(full);
    }
  }

  // Full formatted phone number for the hidden input
  const fullPhoneNumber = phoneNumber.trim()
    ? `${selectedCountry.dialCode} ${phoneNumber.trim()}`
    : "";

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Hidden input storing the full international phone number */}
      <input
        type="hidden"
        name={name}
        value={fullPhoneNumber}
      />

      <div className="flex rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all overflow-hidden">
        {/* Country Selector Trigger Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-3 border-r border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer select-none shrink-0"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          title={`Selected country: ${selectedCountry.name} (${selectedCountry.dialCode})`}
        >
          <span className="text-xl leading-none" role="img" aria-label={selectedCountry.name}>
            {selectedCountry.flag}
          </span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 font-mono">
            {selectedCountry.dialCode}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Local Phone Number Input */}
        <input
          ref={phoneInputRef}
          type="tel"
          id={id}
          required={required}
          disabled={disabled}
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder || selectedCountry.placeholder}
          className="flex-1 px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none w-full text-base font-normal"
        />
      </div>

      {/* Country Selection Dropdown Popover */}
      {isOpen && (
        <div className="absolute z-50 left-0 top-full mt-2 w-full sm:w-96 max-w-[92vw] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Search Box */}
          <div className="p-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-9 pr-8 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Countries List */}
          <div className="max-h-64 overflow-y-auto divide-y divide-gray-50 dark:divide-gray-800 scrollbar-thin">
            {/* When not searching, show Popular Countries first */}
            {!searchQuery.trim() && (
              <div>
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50/80 dark:bg-gray-900/80 sticky top-0 backdrop-blur-xs">
                  Popular Countries
                </div>
                {popularCountries.map((country) => (
                  <button
                    key={`popular-${country.code}`}
                    type="button"
                    onClick={() => handleSelectCountry(country)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer ${
                      selectedCountry.code === country.code
                        ? "bg-primary/10 text-primary font-medium dark:bg-primary/20"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-lg leading-none">{country.flag}</span>
                      <span className="truncate">{country.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-gray-400 dark:text-gray-400 font-mono">
                        {country.dialCode}
                      </span>
                      {selectedCountry.code === country.code && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50/80 dark:bg-gray-900/80 sticky top-0 backdrop-blur-xs">
                  All Countries
                </div>
              </div>
            )}

            {/* List of Countries */}
            {filteredCountries.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                No country found matching &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelectCountry(country)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer ${
                    selectedCountry.code === country.code
                      ? "bg-primary/10 text-primary font-medium dark:bg-primary/20"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-lg leading-none">{country.flag}</span>
                    <span className="truncate">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-gray-400 dark:text-gray-400 font-mono">
                      {country.dialCode}
                    </span>
                    {selectedCountry.code === country.code && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
