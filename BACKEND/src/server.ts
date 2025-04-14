import express from "express";
import cors from "cors";

export const startServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.get("/", (_req, res) => {
    res.send("🔥 Backend ready!");
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
};
