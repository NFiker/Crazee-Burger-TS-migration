import { drizzle } from "drizzle-orm/postgres-js";
import { DATABASE_URL } from "./env"; // Assurez-vous que DATABASE_URL est bien défini dans env.ts

// Configuration de Drizzle ORM pour PostgreSQL
const db = drizzle(DATABASE_URL);

export default db;
