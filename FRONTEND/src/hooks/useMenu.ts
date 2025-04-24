import { useState } from "react";
import { updateMenu } from "@/api/backend-api";
import { MenuProduct } from "@/types/Product";
import { fakeMenu } from "@/fakeData/fakeMenu";
import { replaceFrenchCommaWithDot } from "@/utils/maths";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuProduct[] | undefined>();

  // Convertit uniquement les prix avant l’envoi au backend
  const prepareMenuForBackend = (
    menuToSanitize: MenuProduct[]
  ): MenuProduct[] =>
    menuToSanitize.map((product) => ({
      ...product,
      price: replaceFrenchCommaWithDot(product.price), // string → number
    }));

  const handleAdd = async (newProduct: MenuProduct, username: string) => {
    if (!menu) return;

    const updatedMenu = [newProduct, ...menu];
    setMenu(updatedMenu);
    await updateMenu(username, prepareMenuForBackend(updatedMenu));
  };

  const handleDelete = async (productIdDelete: string, username: string) => {
    if (!menu) return;

    const updatedMenu = menu.filter(
      (product) => product.id !== productIdDelete
    );
    setMenu(updatedMenu);
    await updateMenu(username, prepareMenuForBackend(updatedMenu));
  };

  const handleEdit = async (
    productBeingEdited: MenuProduct,
    username: string
  ) => {
    if (!menu) return;

    const updatedMenu = menu.map((product) =>
      product.id === productBeingEdited.id ? productBeingEdited : product
    );
    setMenu(updatedMenu);
    await updateMenu(username, prepareMenuForBackend(updatedMenu));
  };

  const resetMenu = async (username: string) => {
    setMenu(fakeMenu.LARGE);
    await updateMenu(username, prepareMenuForBackend(fakeMenu.LARGE));
  };

  return {
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    handleEdit,
    resetMenu,
  };
};
