// app.ts

import express from 'express';
import { connectToDatabase } from './db';

const app = express();
const port = 3000;

// Connexion à la base de données MongoDB Atlas
connectToDatabase();

// Vos routes et logique d'application ici...

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
