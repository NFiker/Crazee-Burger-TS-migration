import { formatInputChange } from "./form";

describe("formatInputChange", () => {
  it("should sanitize price input correctly", () => {
    const result = formatInputChange("price", "12.34");
    expect(result).toBe("12,34");
  });

  it("should convert isAvailable string 'true' to boolean true", () => {
    const result = formatInputChange("isAvailable", "true");
    expect(result).toBe(true);
  });

  it("should convert isPublicised string 'false' to boolean false", () => {
    const result = formatInputChange("isPublicised", "false");
    expect(result).toBe(false);
  });

  it("should return value unchanged for other fields", () => {
    const result = formatInputChange("title", "Super Burger");
    expect(result).toBe("Super Burger");
  });
});
