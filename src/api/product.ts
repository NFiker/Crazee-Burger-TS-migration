import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { MenuProduct } from "@/types/Product";

export const syncBothMenus = (userId: string, menuUpdated: MenuProduct[]) => {
  const cachette = doc(db, "users", userId);

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  };
  setDoc(cachette, nourriture);
};

export const getMenu = async (
  userId: string
): Promise<MenuProduct[] | undefined> => {
  // const docref = doc(CHEMIN)
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu as MenuProduct[];
  }
};
