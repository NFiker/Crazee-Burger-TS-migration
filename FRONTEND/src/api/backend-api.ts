import { fakeMenu } from "@/fakeData/fakeMenu";
import { MenuProduct } from "@/types/Product";

const apiUrl = import.meta.env.VITE_API_URL;

// Créer un utilisateur via l'API
export const createUser = async (userId: string) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userId,
        menu: fakeMenu.LARGE,
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la création de l'utilisateur");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Récupérer un utilisateur avec son menu
export const getUser = async (userId: string) => {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}`);

    if (response.status === 404) {
      return null; // l'utilisateur n'existe pas encore
    }

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'utilisateur");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Mettre à jour le menu d'un utilisateur
export const updateMenu = async (userId: string, menu: MenuProduct[]) => {
  try {
    console.log("Updating menu for user:", userId); // Ajoute un log ici pour vérifier l'utilisateur
    console.log("Menu being sent to backend:", menu); // Log des données envoyées

    const response = await fetch(`${apiUrl}/users/${userId}/menu`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour du menu");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while updating menu:", error); // Plus de détails sur l'erreur
    throw error;
  }
};
