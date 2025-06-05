import express from 'express';
import {fileURLtoPath} from 'url';
import pokemonRoutes from '../routes/pokemon.js';

const app = express();
const PORT = 3000;

const_filename = fileURLToPath(import.meta.url);

app.set("view engione", "ejs");
app.use("/",pokemonRoutes);

app.listen(PORT,()=> {console.log('server is running on http://localhost:${POST}')});