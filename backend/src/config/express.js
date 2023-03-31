const express = require("express");
const routes = require("../router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes);
module.exports = app;
