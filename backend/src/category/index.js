const Category = require("./category");
const CategoryService = require("./category.services");
const categoryService = new CategoryService(Category);

// console.log(JSON.stringify(categoryService));
module.exports = categoryService;
