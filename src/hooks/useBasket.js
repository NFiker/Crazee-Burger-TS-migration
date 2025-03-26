import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import {
  deepClone,
  findObjectById,
  findIndexById,
  removeObjectById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idProductToAdd, username) => {
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
    idProductToAdd,
    basketCopy,
    username
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
    idProductToAdd,
    basketCopy,
    setBasket,
    username
  ) => {
    const newBasketProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct, username) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
