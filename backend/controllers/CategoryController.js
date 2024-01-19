import Category from "../models/Category.model.js";

const AddCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      return res
        .status(400)
        .json({ message: "Category name is required", hasError: true });
    }

    const category = await Category.create({
      categoryName: categoryName,
    });

    await category.save();

    res.status(200).json({
      message: "Category added successfully",
      hasError: false,
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, hasError: true });
  }
};

const FetchCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { AddCategory, FetchCategories };
