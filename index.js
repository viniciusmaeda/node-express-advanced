// importando o express para a aplicação
const express = require("express");

// importando os arquivos que contém as rotas da aplicação
const modelRoute = require("./routes/Model");
const makeRoute = require("./routes/Make");

// iniciando a aplicação com a função express()
const app = express();

// número da porta em que o servidor irá rodar
const port = 3000;

/********************************************************/
// ROTA PADRÃO

app.get("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/
  res.send("Home");
});

/********************************************************/
// DEMAIS ROTAS
app.use("/model", modelRoute);
app.use("/make", makeRoute);

app.listen(port, () => console.log(`Running on port ${port}`));
