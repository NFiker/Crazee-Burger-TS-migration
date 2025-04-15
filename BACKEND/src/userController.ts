import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { users, menuProducts } from "./schema";
import { MenuProduct } from "./types/Product";
import { User } from "./types/User";

// Créer un utilisateur avec un menu par défaut
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
      price: item.price,
      quantity: item.quantity ?? 1,
      isAvailable: item.isAvailable,
      isPublicised: item.isPublicised,
    }))
  );

  return { username, menu };
};

// Récupérer un utilisateur
export const getUser = async (username: string): Promise<User | null> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.username, username))
    .limit(1);

  if (user.length === 0) return null;

  const menuItems = await db
    .select()
    .from(menuProducts)
    .where(eq(menuProducts.userId, username));

  const menu: MenuProduct[] = menuItems.map((item) => ({
    id: item.id.toString(), // Si `id` est un nombre, on le cast en string pour coller au front
    imageSource: item.imageSource,
    title: item.title,
    price: item.price,
    quantity: item.quantity ?? 1,
    isAvailable: item.isAvailable,
    isPublicised: item.isPublicised,
  }));

  return { username, menu };
};

// Mettre à jour un utilisateur et son menu
export const updateUser = async (
  username: string,
  newMenu: MenuProduct[]
): Promise<User | null> => {
  const userExists = await getUser(username);
  if (!userExists) return null;

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

// Supprimer un utilisateur et son menu
export const deleteUser = async (username: string): Promise<boolean> => {
  const userExists = await getUser(username);
  if (!userExists) return false;

  await db.delete(menuProducts).where(eq(menuProducts.userId, username));
  await db.delete(users).where(eq(users.username, username));

  return true;
};
