import { DEFAULT_SUM_TO_PAY } from "@/constants/product";
import { BasketProductQuantity, MenuProduct } from "@/types/Product";
import { findObjectById } from "@/utils/array";
import { convertStringToBoolean } from "@/utils/string";

export const calculateSumToPay = (
  basket: BasketProductQuantity[],
  menu: MenuProduct[] | undefined
) => {
  if (menu === undefined) return DEFAULT_SUM_TO_PAY;

  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu);

    // Produit introuvable
    if (menuProduct === undefined) return total;

    // Eviter l'affichage de NaN
    if (isNaN(menuProduct.price)) return total;

    // Si le produit est en rupture, le retirer du total
    if (!convertStringToBoolean(menuProduct.isAvailable)) return total;

    return (total += menuProduct.price * basketProduct.quantity);
  }, DEFAULT_SUM_TO_PAY);
};
