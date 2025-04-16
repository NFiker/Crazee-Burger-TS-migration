import { Request, Response, RequestHandler } from "express";
import { createUser, getUser, updateUser, deleteUser } from "./user.controller";

// Handler pour créer un utilisateur
export const createUserHandler: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, menu } = req.body;

  try {
    const user = await createUser(username, menu);
    res.status(201).json(user); // On envoie la réponse ici sans retourner res
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

// Handler pour récupérer un utilisateur
export const getUserHandler: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.params;

  try {
    const user = await getUser(username);
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return; // Pas besoin de retourner quoi que ce soit après avoir envoyé la réponse
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'utilisateur" });
  }
};

// Handler pour mettre à jour un utilisateur
export const updateUserHandler: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.params;
  const { menu } = req.body;

  try {
    const updatedUser = await updateUser(username, menu);
    if (!updatedUser) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};

// Handler pour supprimer un utilisateur
export const deleteUserHandler: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.params;

  try {
    const success = await deleteUser(username);
    if (!success) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }
    res.status(200).json({ message: "Utilisateur supprimé" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
};
