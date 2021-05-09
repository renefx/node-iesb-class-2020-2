const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var produtoSubSchema = new mongoose.Schema(
  {
    idProduto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "produtos",
    },
    quantidade: {
      type: Number,
      default: 1,
    },
    comentario: String,
  },
  { _id: false }
);

// Declare the Schema of the Mongo model
var pedidoSchema = new mongoose.Schema({
  data: {
    type: Date,
    default: Date.now,
  },
  nomeUsuario: {
    type: String,
    required: true,
  },
  lista: [produtoSubSchema],
});

//Export the model
module.exports = mongoose.model("pedidos", pedidoSchema);
