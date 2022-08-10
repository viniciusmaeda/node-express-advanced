// importando o express para a aplicação
const express = require("express");

// definição de objeto que realizará o roteamento
const routes = express.Router();

// definição da rota para o método GET
routes.get("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - get");

  // aqui será utilizado para buscar os dados dos veículos
});

// definição da rota para o método POST
routes.post("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - post");

  // aqui será utilizado para salvar veículos
});

// definição da rota para o método PUT
routes.put("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - put");

  // aqui será utilizado para atualizar dados de veículos
});

// definição da rota para o método DELETE
routes.delete("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - delete");

  // aqui será utilizado para excluir veículos
});

module.exports = routes;
