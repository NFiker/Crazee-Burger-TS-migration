import { useState } from "react";
import { updateMenu } from "@/api/backend-api"; // Utilisation de l'API du backend
import { MenuProduct } from "@/types/Product";
import { fakeMenu } from "@/fakeData/fakeMenu";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuProduct[] | undefined>();

  // Ajouter un produit
  const handleAdd = async (newProduct: MenuProduct, username: string) => {
    if (!menu) return;

    const menuUpdated = [newProduct, ...menu];
    setMenu(menuUpdated);
    await updateMenu(username, menuUpdated); // Appel API pour mettre à jour le menu
  };

  // Supprimer un produit
  const handleDelete = async (productIdDelete: string, username: string) => {
    if (!menu) return;

    const menuUpdated = menu.filter(
      (product) => product.id !== productIdDelete
    );
    setMenu(menuUpdated);
    await updateMenu(username, menuUpdated); // Appel API pour mettre à jour le menu
  };

  // Modifier un produit
  const handleEdit = async (
    productBeingEdited: MenuProduct,
    username: string
  ) => {
    if (!menu) return;

    const menuUpdated = menu.map((product) =>
      product.id === productBeingEdited.id ? productBeingEdited : product
    );
    setMenu(menuUpdated);
    await updateMenu(username, menuUpdated); // Appel API pour mettre à jour le menu
  };

  // Réinitialiser le menu
  const resetMenu = async (username: string) => {
    setMenu(fakeMenu.LARGE);
    await updateMenu(username, fakeMenu.LARGE); // Réinitialiser le menu via l'API
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
