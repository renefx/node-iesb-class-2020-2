const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true, //valor unico
    index: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  descricao: String,
  imagem: String,
  permiteAlteracao: {
    type: Boolean,
    default: true,
  },
});

//Export the model
module.exports = mongoose.model("produtos", produtoSchema);
