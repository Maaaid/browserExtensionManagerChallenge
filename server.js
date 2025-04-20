const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
