import "tsconfig-paths/register"; // Assure que tsconfig-paths est enregistré
import express from "express";
import cors from "cors";
import { PORT } from "@/config/env";
import userRoutes from "@/modules/user/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes utilisateurs
app.use("/api/users", userRoutes);

// Route de test
app.get("/", (_req, res) => {
  res.send("🔥 Backend ready!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
