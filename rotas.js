/*
*
*API FEITA POR PEDROZZ MODS*
*API LOCAL
*/

api = process.cwd()
__path = process.cwd()
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require('path');
const axios = require('axios');
const util = require('util')

const app = express();
const router = express.Router();
const PORT = `8080`;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//EXEMPLO DE NOVA ROTA

app.get('/hentai', async (req, res, next) => {
const pasta = JSON.parse(fs.readFileSync(__dirname + '/teste.json'));
const random = pasta[Math.floor(Math.random() * pasta.length)];
res.json({
url: `${random}`
})
})

app.get('/frases', async (req, res, next) => {
const frase = JSON.parse(fs.readFileSync(__dirname + '/frases.json'));
const random = frase[Math.floor(Math.random() * frase.length)];
res.json({
frase: `${random}`
})
})

//===================[ PORTAS ]====================//

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//==============( ÁREA DAS ATUALIZAÇÕES )==========\\
fs.watchFile('./api.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O arquivo index.js foi editado. Reiniciando...');
process.exit();
}
});
//==========================(  )========================\\
