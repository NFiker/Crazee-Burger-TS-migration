import { getUser, createUser } from "@/api/backend-api";

export const authenticateUser = async (username: string) => {
  const existingUser = await getUser(username);

  if (existingUser) return existingUser;

  // Si l'utilisateur n'existe pas, on le crée
  return await createUser(username);
};
