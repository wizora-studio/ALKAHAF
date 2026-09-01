export type Currency = "USD" | "EUR";

const europeanRegions = new Set([
  "AD", "AL", "AT", "BA", "BE", "BG", "BY", "CH", "CY", "CZ",
  "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU",
  "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MD", "ME",
  "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE",
  "SI", "SK", "SM", "UA", "VA", "XK",
]);

function getBrowserRegion() {
  const locales = [
    ...(typeof navigator !== "undefined" ? navigator.languages : []),
    typeof navigator !== "undefined" ? navigator.language : undefined,
  ].filter(Boolean) as string[];

  for (const locale of locales) {
    try {
      const region = new Intl.Locale(locale).region;
      if (region) return region.toUpperCase();
    } catch {
      // Try the next locale when a browser provides an invalid value.
    }
  }

  return undefined;
}

export function getAutomaticCurrency(): Currency {
  const region = getBrowserRegion();
  if (region && europeanRegions.has(region)) return "EUR";

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timeZone?.startsWith("Europe/")) return "EUR";

  return "USD";
}
