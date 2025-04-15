import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { DATABASE_URL } from "./env";

const client = postgres(DATABASE_URL, {
  ssl: true, // à adapter selon ton environnement (true en prod sur Railway, false en local)
});

export const db = drizzle(client);
