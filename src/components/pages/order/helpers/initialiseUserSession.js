import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";
import { fakeBasket } from "../../../../fakeData/fakeBasket";

const initialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initialiseBasket = (username, setBasket) => {
  const BasketReceived = getLocalStorage(username);
  if (BasketReceived) setBasket(BasketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
};
