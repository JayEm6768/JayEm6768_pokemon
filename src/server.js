import express from 'express';
import {fileURLToPath} from 'url';

import pokemonRoutes from '../routes/pokemon.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);

app.set("view engine", "ejs");
app.use("/",pokemonRoutes);

app.listen(PORT,()=> {console.log(`server is running on http://localhost:${PORT}`)});