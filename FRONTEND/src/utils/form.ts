import { sanitizeRawPriceInput } from "@/utils/maths";
import { convertStringToBoolean } from "@/utils/string";

export const formatInputChange = (
  name: string,
  value: string
): string | number | boolean => {
  if (name === "price") {
    return sanitizeRawPriceInput(value);
  }
  if (name === "isAvailable" || name === "isPublicised") {
    return convertStringToBoolean(value);
  }
  return value;
};
