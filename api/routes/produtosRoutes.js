const express = require("express");
const mongoose = require("mongoose");
const Produto = require("../models/produto");

const routes = express.Router();

routes.get("/", (req, res) => {
  console.log(`GET Produtos!`);
  res.send("Ola turma!");
});

routes.post("/", (req, res) => {
  const produto = new Produto({
    nome: "Yakissoba de Camarão1",
    preco: 10.99,
  });
  console.log(`1`);
  produto
    .save()
    .then((doc) => {
      console.log(`2`);
      console.log(`POST produtos sucesso! ${doc}`);
      res.send({ mensagem: "Objeto criado", doc: doc });
    })
    .catch((err) => {
      console.log(`3`);
      console.log(`Erro POST produtos! ${err}`);
      res.send({ mensagem: err.message, erro: err });
    });
  console.log(`4`);
});

routes.get("/:idProduto", function (req, res) {
  const { idProduto } = req.params;
  res.send("DELETE request to the homepage");
});

routes.patch("/:idProduto", function (req, res) {
  const { idProduto } = req.params;
  res.send("DELETE request to the homepage");
});

routes.delete("/:idProduto", function (req, res) {
  const { idProduto } = req.params;
  res.send("DELETE request to the homepage");
});

module.exports = routes;
