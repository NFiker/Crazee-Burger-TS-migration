// import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import {
  deepClone,
  findObjectById,
  findIndexById,
  removeObjectById,
} from "@/utils/array";
import { setLocalStorage } from "@/utils/window";
import { BasketProductQuantity } from "@/types/Product";

export const useBasket = () => {
  const [basket, setBasket] = useState<BasketProductQuantity[]>([]);

  const handleAddToBasket = (idProductToAdd: string, username: string) => {
    const basketCopy = deepClone(basket);
    const ProductAlreadyInBasket = findObjectById(idProductToAdd, basketCopy);

    //    1er cas: produit non présent dans le basket => on l'ajoute
    if (!ProductAlreadyInBasket) {
      createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
      return;
    }
    //    2eme cas: produit présent dans le basket => on l'incrémente
    incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
  };

  const incrementProductAlreadyInBasket = (
    idProductToAdd: string,
    basketCopy: BasketProductQuantity[],
    username: string
  ) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const createNewBasketProduct = (
    idProductToAdd: string,
    basketCopy: BasketProductQuantity[],
    setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>,
    username: string
  ) => {
    const newBasketProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const handleDeleteBasketProduct = (
    idBasketProduct: string,
    username: string
  ) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
