const express = require("express");
const path = require("path");
const cors = require("cors"); // Si tu veux activer CORS pour tes requêtes depuis le frontend

const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques (comme ton frontend)
app.use(express.static(path.join(__dirname, "public")));

// Route pour récupérer data.json
app.get("/api/extensions", (req, res) => {
  // Utilisation d'une route relative
  res.sendFile(path.join(__dirname, "public", "data.json"));
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
