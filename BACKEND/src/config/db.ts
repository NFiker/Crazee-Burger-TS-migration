import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { DATABASE_URL } from "./env";
import { schema } from "@/modules/user/user.schema"; // 👈 ajoute ceci

const client = postgres(DATABASE_URL, {
  ssl: true,
});

// 👇 ici on passe le schéma
export const db = drizzle(client, { schema });
