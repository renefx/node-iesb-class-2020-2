const express = require("express");
const mongoose = require("mongoose");

const produtosRoutes = require("./api/routes/produtosRoutes");
const pedidosRoutes = require("./api/routes/pedidosRoutes");

const app = express();
const port = process.env.PORT || 3000;
const dbURL = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0.xtncv.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;

mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Mongo DB Connectou");
    } else {
      console.log(`Erro Mongo DB ${err}`);
    }
  }
);

app.use(express.json());
app.use("/produtos", produtosRoutes);
app.use("/pedidos", pedidosRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
