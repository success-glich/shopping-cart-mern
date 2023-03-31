const  categoryService = require("./index");

const CategoryController = {
  getCategories: async (req, res) => {
    try {
      console.log("😉");
      const categories = await categoryService.findAll();
      return res.status(200).json({
        message: "Fetched successfully",
        categories: categories,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: "There was some error",
      });
    }
  },
  saveCategory: async (req, res) => {
    const { title } = req.body;
    try {
      console.log(typeof categoryService);

      const saveCategory = await categoryService.create({
        title,
        slug: "dummy",
      });

      return res.status(200).json({
        message: "Category created successfully",
        data: {
          saveCategory,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: "There was some error from controller",
      });
    }
  },
};

module.exports = CategoryController;
