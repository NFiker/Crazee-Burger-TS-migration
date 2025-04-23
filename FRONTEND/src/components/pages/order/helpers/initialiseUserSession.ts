import { getUser } from "@/api/backend-api";
import { getLocalStorage } from "@/utils/window";
import { MenuProduct, BasketProductQuantity } from "@/types/Product";

const initialiseMenu = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>
) => {
  const user = await getUser(username);
  if (user?.menu) {
    setMenu(user.menu); // ✅ on récupère le menu depuis l'objet user (backend)
  }
};

const initialiseBasket = (
  username: string,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  const basket = getLocalStorage(username);
  if (basket) {
    setBasket(basket as BasketProductQuantity[]);
  }
};

export const initialiseUserSession = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
};
