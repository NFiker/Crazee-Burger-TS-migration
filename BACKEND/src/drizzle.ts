import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL as string, {
  ssl: true, // ou false selon ton hébergeur
});

export const db = drizzle(client);
