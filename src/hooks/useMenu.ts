import { useState } from "react";
import { fakeMenu } from "@/fakeData/fakeMenu";
import { deepClone } from "@/utils/array";
//@ts-ignore
import { syncBothMenus } from "@/api/product";
import { MenuProduct } from "@/types/Product";

/**
 * À REVOIR:
 *
 * - undefined à gérer en cas de non retour API
 * - deepClone non nécessaire (filter, spread etc revoient déja une copie du tableau)
 */

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuProduct[] | undefined>();

  //Comportements
  const handleAdd = (newProduct: MenuProduct, username: string) => {
    if (!menu) return;
    // 1. Copie du tableau
    const menuCopy = [...menu];
    // 2. Manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    // 3. Update du state
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (productIdDelete: string, username: string) => {
    if (!menu) return;
    // 1. Copie du tableau
    const menuCopy = deepClone(menu);
    // 2. Manip de la copie du tableau
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== productIdDelete
    );
    // 3. Update du state
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleEdit = (productBeingEdited: MenuProduct, username: string) => {
    if (!menu) return;
    // 1. Copie du tableau
    const menuCopy = deepClone(menu);

    // 2. Manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // 3. Update du state
    setMenu(menuCopy);
    syncBothMenus(username, menuCopy);
  };

  const resetMenu = (username: string) => {
    setMenu(fakeMenu.LARGE);
    syncBothMenus(username, fakeMenu.LARGE);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};

/**
 * Version revue en side
 */

// import { useState } from "react";
// import { fakeMenu } from "@/fakeData/fakeMenu";
// //@ts-ignore
// import { syncBothMenus } from "@/api/product";
// import { MenuProduct } from "@/types/Product";

// export const useMenu = () => {
//   const [menu, setMenu] = useState<MenuProduct[]>([]);

//   // Ajouter un produit
//   const handleAdd = (newProduct: MenuProduct, username: string) => {
//     setMenu((prevMenu) => {
//       const menuUpdated = [newProduct, ...prevMenu];
//       syncBothMenus(username, menuUpdated);
//       return menuUpdated;
//     });
//   };

//   // Supprimer un produit
//   const handleDelete = (productIdDelete: string, username: string) => {
//     setMenu((prevMenu) => {
//       const menuUpdated = prevMenu.filter((product) => product.id !== productIdDelete);
//       syncBothMenus(username, menuUpdated);
//       return menuUpdated;
//     });
//   };

//   // Modifier un produit
//   const handleEdit = (productBeingEdited: MenuProduct, username: string) => {
//     setMenu((prevMenu) => {
//       const menuCopy = [...prevMenu];
//       const indexOfProductToEdit = menuCopy.findIndex(
//         (menuProduct) => menuProduct.id === productBeingEdited.id
//       );

//       if (indexOfProductToEdit === -1) return prevMenu; // Produit non trouvé

//       menuCopy[indexOfProductToEdit] = productBeingEdited;
//       syncBothMenus(username, menuCopy);
//       return menuCopy;
//     });
//   };

//   // Réinitialiser le menu
//   const resetMenu = (username: string) => {
//     setMenu(() => {
//       syncBothMenus(username, fakeMenu.LARGE);
//       return fakeMenu.LARGE;
//     });
//   };

//   return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
// };
