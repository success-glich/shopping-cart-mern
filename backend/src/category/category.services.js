class BaseService {
  constructor(model) {
    console.log(model);
    this.model = model;
  }
  async findAll() {
    console.log(this.model);

    const data = await this.model.find({});
    return data;
  }
  async create(data) {
    try {
      console.log("Creating category with data", data);
      const createdData = await this.model.create({ ...data });
      return createdData;
    } catch (err) {
      throw new Error("There were some errors");
    }
  }
}

class CategoryService extends BaseService {
  constructor(Category) {
    super(Category);
  }
}

module.exports = CategoryService;
