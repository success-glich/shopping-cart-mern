const categoryRouter = require("../category/category.routes");

const routes = require("express").Router();

routes.use("/category", categoryRouter);
module.exports = routes;
