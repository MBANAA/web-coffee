const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définir le dossier contenant les fichiers statiques
app.use(express.static(path.join(__dirname, 'coffe website')));

// Route pour servir le fichier index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'coffe website', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
