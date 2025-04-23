import { db } from "@/config/db";
import { users, menuProducts } from "@/modules/user/user.schema";
import { MenuProduct } from "@/modules/product/product.type";
import { User } from "@/modules/user/user.types";
import { eq } from "drizzle-orm";

// Créer un utilisateur et son menu
export const createUser = async (
  username: string,
  menu: MenuProduct[]
): Promise<User> => {
  await db.insert(users).values({ username });

  await db.insert(menuProducts).values(
    menu.map((item) => ({
      userId: username,
      imageSource: item.imageSource,
      title: item.title,
      price: item.price.toString(), // 👈 conversion en string pour PostgreSQL.numeric
      quantity: item.quantity ?? 1,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    }))
  );

  return { username, menu };
};

// Récupérer un utilisateur et son menu
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
      price: parseFloat(item.price as string), // 👈 retransformé en number
      quantity: item.quantity,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    })),
  };
};

// Mettre à jour le menu
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
      price: item.price.toString(), // 👈 conversion string
      quantity: item.quantity ?? 1,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    }))
  );

  return { username, menu: newMenu };
};

// Supprimer un utilisateur
export const deleteUser = async (username: string): Promise<boolean> => {
  const existing = await getUser(username);
  if (!existing) return false;

  await db.delete(menuProducts).where(eq(menuProducts.userId, username));
  await db.delete(users).where(eq(users.username, username));

  return true;
};
