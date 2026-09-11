"use client";

import React, { useState } from "react";
import { Country } from "@/lib/countries";

interface CountryFlagProps {
  country: Country;
  className?: string;
  width?: number;
  height?: number;
}

export default function CountryFlag({
  country,
  className = "w-5 h-3.5",
  width = 20,
  height = 14,
}: CountryFlagProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !country?.code) {
    return (
      <span className="text-lg leading-none" role="img" aria-label={country?.name || "Flag"}>
        {country?.flag || "🌐"}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center shrink-0">
      <img
        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 2x`}
        width={width}
        height={height}
        alt={country.name}
        className={`rounded-xs object-cover shadow-xs inline-block shrink-0 ${className}`}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </span>
  );
}
