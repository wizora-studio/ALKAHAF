"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown, Search, X, Check, Globe } from "lucide-react";
import {
  COUNTRIES,
  POPULAR_COUNTRY_CODES,
  Country,
  findCountryByCode,
  searchCountries,
} from "@/lib/countries";

export interface CountrySelectProps {
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string; // Country code or name
  value?: string;
  onCountryChange?: (country: Country) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}

export default function CountrySelect({
  id = "country",
  name = "country",
  required = false,
  disabled = false,
  defaultValue = "",
  value,
  onCountryChange,
  placeholder = "Select Country",
  searchPlaceholder = "Search country...",
  className = "",
}: CountrySelectProps) {
  // Find initial country
  const initialCountry = useMemo(() => {
    if (!defaultValue && !value) return null;
    const target = value || defaultValue;
    return (
      COUNTRIES.find(
        (c) =>
          c.code.toUpperCase() === target.toUpperCase() ||
          c.name.toLowerCase() === target.toLowerCase(),
      ) || null
    );
  }, [defaultValue, value]);

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    initialCountry,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync with value prop if controlled
  useEffect(() => {
    if (value !== undefined) {
      const match = COUNTRIES.find(
        (c) =>
          c.code.toUpperCase() === value.toUpperCase() ||
          c.name.toLowerCase() === value.toLowerCase(),
      );
      setSelectedCountry(match || null);
    }
  }, [value]);

  // Click outside to close
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
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle ESC
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const filteredCountries = useMemo(() => {
    return searchCountries(searchQuery);
  }, [searchQuery]);

  const popularCountries = useMemo(() => {
    return POPULAR_COUNTRY_CODES.map((code) => findCountryByCode(code)).filter(
      (c): c is Country => Boolean(c),
    );
  }, []);

  function handleSelect(country: Country) {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");
    if (onCountryChange) {
      onCountryChange(country);
    }
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Hidden input for form submission */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={selectedCountry ? selectedCountry.name : ""}
        required={required}
      />

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all flex items-center justify-between text-left cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 truncate">
          {selectedCountry ? (
            <>
              <span className="text-xl leading-none" role="img" aria-label={selectedCountry.name}>
                {selectedCountry.flag}
              </span>
              <span className="text-gray-900 dark:text-gray-100 font-medium truncate">
                {selectedCountry.name}
              </span>
            </>
          ) : (
            <>
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 dark:text-gray-500">
                {placeholder}
              </span>
            </>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute z-50 left-0 top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Search Bar */}
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

          {/* List of Countries */}
          <div className="max-h-64 overflow-y-auto divide-y divide-gray-50 dark:divide-gray-800 scrollbar-thin">
            {!searchQuery.trim() && (
              <div>
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50/80 dark:bg-gray-900/80 sticky top-0 backdrop-blur-xs">
                  Popular Countries
                </div>
                {popularCountries.map((country) => (
                  <button
                    key={`popular-${country.code}`}
                    type="button"
                    onClick={() => handleSelect(country)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer ${
                      selectedCountry?.code === country.code
                        ? "bg-primary/10 text-primary font-medium dark:bg-primary/20"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-lg leading-none">{country.flag}</span>
                      <span className="truncate">{country.name}</span>
                    </div>
                    {selectedCountry?.code === country.code && (
                      <Check className="w-4 h-4 text-primary shrink-0 ml-2" />
                    )}
                  </button>
                ))}
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50/80 dark:bg-gray-900/80 sticky top-0 backdrop-blur-xs">
                  All Countries
                </div>
              </div>
            )}

            {filteredCountries.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                No country found matching &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelect(country)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer ${
                    selectedCountry?.code === country.code
                      ? "bg-primary/10 text-primary font-medium dark:bg-primary/20"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-lg leading-none">{country.flag}</span>
                    <span className="truncate">{country.name}</span>
                  </div>
                  {selectedCountry?.code === country.code && (
                    <Check className="w-4 h-4 text-primary shrink-0 ml-2" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
