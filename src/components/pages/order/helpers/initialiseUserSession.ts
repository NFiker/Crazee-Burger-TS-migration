import { getMenu } from "@/api/product.ts";
import { BasketProductQuantity, MenuProduct } from "@/types/Product";
import { getLocalStorage } from "@/utils/window.ts";

const initialiseMenu = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>
) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initialiseBasket = (
  username: string,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  const BasketReceived = getLocalStorage(username); // LocalStorage est synchrone...
  if (BasketReceived) setBasket(BasketReceived as BasketProductQuantity[]); //...Mais on ne connait pas son contenu à temps => utiliser <T> dans sa definition ou as ici.
};

export const initialiseUserSession = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
};
