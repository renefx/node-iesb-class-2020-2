const express = require("express");
const routes = express.Router();

routes.post("/exemplo/:idProduto", function (req, res) {
  const { franquia, quadra } = req.headers;
  const { nome, descricao, preco } = req.body;
  const { idProduto } = req.params;
  const { ordenacao, pagina } = req.query;
  res.statusCode = 201;
  res.send({
    mensagem: "Item criado com sucesso",
  });
});

routes.get("/", (req, res) => {
  console.log(`GET Pedidos!`);
  res.send("Ola turma!");
});

routes.post("/", (req, res) => {
  console.log(`GET Pedidos!`);
  res.send("Ola turma!");
});

routes.get("/:idPedidos", function (req, res) {
  const { idPedidos } = req.params;
  res.send("DELETE request to the homepage");
});

routes.patch("/:idPedidos", function (req, res) {
  const { idPedidos } = req.params;
  res.send("DELETE request to the homepage");
});

routes.delete("/:idPedidos", function (req, res) {
  const { idPedidos } = req.params;
  res.send("DELETE request to the homepage");
});

module.exports = routes;
