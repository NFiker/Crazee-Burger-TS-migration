import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";

// Table des utilisateurs
export const users = pgTable("users", {
  id: serial("id").primaryKey(), // auto-incrémenté
  username: text("username").primaryKey(), // clé primaire logique
});

// Table des produits du menu liés à un utilisateur
export const menuProducts = pgTable("menu_products", {
  id: serial("id").primaryKey(),
  userId: text("user_id").references(() => users.username), // FK vers users.username
  imageSource: text("image_source").notNull(),
  title: text("title").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity"), // optionnel
  isAvailable: boolean("is_available").notNull(),
  isPublicised: boolean("is_publicised").notNull(),
});

export const schema = {
  users,
  menuProducts,
};
