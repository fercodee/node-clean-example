const express = require("express");
const routes = require("./routes");

// ? É necessário importa a nossa base de dados:
require('./database');

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("Server is running..."));