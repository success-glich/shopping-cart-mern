const express = require("express");
const CategoryController = require("./category.controller");

const categoryRouter = express.Router();

categoryRouter.get("/", CategoryController.getCategories);
// categoryRouter.get("/", (req, res) => {
//   console.log("REsponding");
//   res.status(200).send("success");
// });
categoryRouter.post("/", CategoryController.saveCategory);
categoryRouter.get("/:categoryId", (req, res) => {
  console.log("category by Id");
});

module.exports = categoryRouter;
