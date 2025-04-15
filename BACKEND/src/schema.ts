import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";

// Table des utilisateurs
export const users = pgTable("users", {
  id: serial("id").primaryKey(), // Facultatif si on ne l'utilise pas
  username: text("username").primaryKey(), // Utilisateur par son nom d'utilisateur
});

// Table des produits de menu
export const menuProducts = pgTable("menu_products", {
  id: serial("id").primaryKey(),
  userId: text("user_id").references(() => users.username), // Référence à un utilisateur
  imageSource: text("image_source").notNull(),
  title: text("title").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity"), // Optionnel
  isAvailable: boolean("is_available").notNull(),
  isPublicised: boolean("is_publicised").notNull(),
});
