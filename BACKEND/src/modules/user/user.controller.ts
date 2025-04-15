import { db } from "../../config/db"; // Connexion à la base de données
import { users, menuProducts } from "./user.schema"; // Schémas des tables
import { eq } from "drizzle-orm"; // Fonction d'égalité
import { MenuProduct } from "@/modules/product/product.type"; // Type pour les produits du menu
import { User } from "./user.types"; // Type pour l'utilisateur

// Créer un utilisateur (et son menu)
export const createUser = async (
  username: string,
  menu: MenuProduct[]
): Promise<User> => {
  // Insérer l'utilisateur dans la table "users"
  await db.insert(users).values({ username });

  // Insérer le menu dans la table "menu_products"
  await db.insert(menuProducts).values(
    menu.map((item) => ({
      userId: username,
      imageSource: item.imageSource,
      title: item.title,
      price: item.price,
      quantity: item.quantity ?? 1, // Si pas de quantité, mettre 1 par défaut
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    }))
  );

  return { username, menu }; // Retourner l'utilisateur avec son menu
};

// Récupérer un utilisateur
export const getUser = async (username: string): Promise<User | null> => {
  // Chercher l'utilisateur dans la table "users"
  const user = await db
    .select()
    .from(users)
    .where(eq(users.username, username)) // Condition d'égalité sur le nom d'utilisateur
    .limit(1) // Limiter à un seul utilisateur
    .execute();

  if (!user.length) return null; // Si l'utilisateur n'existe pas, retourner null

  // Récupérer le menu de l'utilisateur
  const menu = await db
    .select()
    .from(menuProducts)
    .where(eq(menuProducts.userId, username)) // Condition d'égalité sur le userId
    .execute();

  // Retourner l'utilisateur avec son menu
  return {
    username,
    menu: menu.map((item) => ({
      id: String(item.id), // Convertir l'id en string
      imageSource: item.imageSource,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    })),
  };
};

// Mettre à jour le menu de l'utilisateur
export const updateUser = async (
  username: string,
  newMenu: MenuProduct[]
): Promise<User | null> => {
  const existing = await getUser(username);
  if (!existing) return null; // Si l'utilisateur n'existe pas, retourner null

  // Supprimer l'ancien menu
  await db.delete(menuProducts).where(eq(menuProducts.userId, username));

  // Insérer le nouveau menu
  await db.insert(menuProducts).values(
    newMenu.map((item) => ({
      userId: username,
      imageSource: item.imageSource,
      title: item.title,
      price: item.price,
      quantity: item.quantity ?? 1,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    }))
  );

  return { username, menu: newMenu }; // Retourner l'utilisateur avec son nouveau menu
};

// Supprimer un utilisateur et son menu
export const deleteUser = async (username: string): Promise<boolean> => {
  const existing = await getUser(username);
  if (!existing) return false; // Si l'utilisateur n'existe pas, retourner false

  // Supprimer le menu de l'utilisateur
  await db.delete(menuProducts).where(eq(menuProducts.userId, username));

  // Supprimer l'utilisateur
  await db.delete(users).where(eq(users.username, username));

  return true; // Utilisateur supprimé
};
