export function formatPrice(priceToFormat: number | string): string {
  let price = priceToFormat;

  if (!price) return "0,00 €";
  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price: string | number): number {
  if (typeof price === "string") {
    if (price.trim() === "") return 0;
    price = parseFloat(price.replace(",", "."));
  }
  return price;
}

export function sanitizeRawPriceInput(value: string): string {
  // Remplace les caractères invalides d'abord
  const cleaned = value.replace(/[^\d.,]/g, "").replace(",", ".");

  // Regex : jusqu’à 4 chiffres, un point, puis jusqu’à 2 chiffres
  const match = cleaned.match(/^(\d{0,4})([.,]?)(\d{0,2})/);

  if (match) {
    const [, intPart, separator, decimalPart] = match;
    return intPart + (separator ? "," : "") + (decimalPart || "");
  }

  return "";
}
