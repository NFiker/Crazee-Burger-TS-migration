import { Router } from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  updateUserHandler,
} from "./user.handlers";

const router = Router();

// Créer un utilisateur
router.post("/", createUserHandler);

// Récupérer un utilisateur
router.get("/:username", getUserHandler);

// Mettre à jour son menu
router.put("/:username/menu", updateUserHandler);

// Supprimer un utilisateur
router.delete("/:username", deleteUserHandler);

export default router;
