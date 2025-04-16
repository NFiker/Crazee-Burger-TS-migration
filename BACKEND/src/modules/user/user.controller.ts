import { db } from "@/config/db";
import { users, menuProducts } from "@/modules/user/user.schema";
import { MenuProduct } from "@/modules/product/product.type";
import { User } from "@/modules/user/user.types";
import { eq } from "drizzle-orm";

// Logique pour créer un utilisateur et son menu
export const createUser = async (
  username: string,
  menu: MenuProduct[]
): Promise<User> => {
  // Créer un utilisateur dans la base de données
  await db.insert(users).values({ username });

  // Créer son menu
  await db.insert(menuProducts).values(
    menu.map((item) => ({
      userId: username,
      imageSource: item.imageSource,
      title: item.title,
      price: item.price,
      quantity: item.quantity ?? 1,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    }))
  );

  return { username, menu };
};

// Logique pour récupérer un utilisateur et son menu
export const getUser = async (username: string): Promise<User | null> => {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  if (!user) return null;

  const menu = await db.query.menuProducts.findMany({
    where: eq(menuProducts.userId, username),
  });

  return {
    username,
    menu: menu.map((item) => ({
      id: String(item.id),
      imageSource: item.imageSource,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    })),
  };
};

// Logique pour mettre à jour le menu d'un utilisateur
export const updateUser = async (
  username: string,
  newMenu: MenuProduct[]
): Promise<User | null> => {
  const existing = await getUser(username);
  if (!existing) return null;

  await db.delete(menuProducts).where(eq(menuProducts.userId, username));
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

  return { username, menu: newMenu };
};

// Logique pour supprimer un utilisateur et son menu
export const deleteUser = async (username: string): Promise<boolean> => {
  const existing = await getUser(username);
  if (!existing) return false;

  await db.delete(menuProducts).where(eq(menuProducts.userId, username));
  await db.delete(users).where(eq(users.username, username));

  return true;
};
