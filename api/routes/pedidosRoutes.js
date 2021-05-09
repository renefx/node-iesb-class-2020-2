const express = require("express");
const Pedido = require("../models/pedido");
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

routes.get("/", async (req, res) => {
  try {
    const doc = await Pedido.find().populate("lista.idProduto");
    res.send(doc);
  } catch (err) {
    res.status(500).send({ mensagem: err.message, erro: err });
  }
});

routes.post("/", async (req, res) => {
  const { nomeUsuario, lista } = req.body;
  try {
    const pedido = new Pedido({
      nomeUsuario: nomeUsuario,
      lista: lista,
    });
    const doc = await pedido.save();
    res.status(204).send({});
  } catch (err) {
    res.status(500).send({ mensagem: err.message, erro: err });
  }
});

routes.get("/:idPedidos", function (req, res) {
  const { idPedidos } = req.params;
  res.send("GET request pedido unico");
});

routes.delete("/:idPedidos", function (req, res) {
  const { idPedidos } = req.params;
  res.send("DELETE request pedido unico");
});

module.exports = routes;
