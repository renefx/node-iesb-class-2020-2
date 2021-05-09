const express = require("express");
const Produto = require("../models/produto");

const routes = express.Router();
const qtElementosNaPagina = 2;

routes.get("/", async (req, res) => {
  const { pagina } = req.query;
  const elementosPulados = (pagina - 1) * qtElementosNaPagina;
  try {
    const doc = await Produto.find({
      // nome: "Yakissoba",
      // nome: /Yakissoba.*/,
      // preco: { $ne: 40 },
    })
      .sort({
        nome: 1, //menor para o maior
        // preco: -1, //maior para o menor
      })
      .skip(elementosPulados)
      .limit(qtElementosNaPagina)
      .select("-permiteAlteracao -__v"); // o menos (-) indica qual não vai ser listado
    res.send(doc);
  } catch (err) {
    console.log(`Erro GET produtos! ${err}`);
    res.status(500).send({ mensagem: err.message, erro: err });
  }
});

routes.post("/", (req, res) => {
  const { nome, preco, descricao, imagem, permiteAlteracao } = req.body;
  const produto = new Produto({
    nome: nome,
    preco: preco,
    descricao: descricao,
    imagem: imagem,
    permiteAlteracao: permiteAlteracao,
  });

  produto
    .save()
    .then((doc) => {
      console.log(`POST produtos sucesso! ${doc}`);
      res.status(204).send({ mensagem: "Objeto criado", doc: doc });
    })
    .catch((err) => {
      console.log(`Erro POST produtos! ${err}`);
      if (err.code == 11000) {
        res.status(500).send({ mensagem: "Esse produto já foi cadastrado." });
        return;
      }
      res.status(500).send({ mensagem: err.message, erro: err });
    });
});

routes.get("/:idProduto", async function (req, res, next) {
  const { idProduto } = req.params;
  try {
    const doc = await Produto.find({
      _id: idProduto,
    }).select("_id nome");
    res.send(doc);
  } catch (err) {
    next(err);
  }
});

routes.patch("/:idProduto", async function (req, res) {
  const { idProduto } = req.params;
  const { preco, descricao } = req.body;
  const parametrosUpdate = {};
  for (const chave of Object.keys(req.body)) {
    parametrosUpdate[chave] = req.body[chave];
  }
  try {
    const doc = await Produto.updateOne(
      {
        _id: idProduto,
      },
      parametrosUpdate
    );
    res.status(204).send({});
  } catch (err) {
    next(err);
  }
});

routes.delete("/:idProduto", async function (req, res) {
  const { idProduto } = req.params;
  try {
    const doc = await Produto.deleteOne({
      _id: idProduto,
    });
    res.status(204).send({});
  } catch (err) {
    next(err);
  }
});

module.exports = routes;
