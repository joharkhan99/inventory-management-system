import Category from "../models/Category.model.js";
import Product from "../models/Product.model.js";

const AddCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const category = await Category.create({
      categoryName: categoryName,
    });

    await category.save();

    res.status(200).json({
      message: "Category added successfully",
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

const DeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res
        .status(400)
        .json({ message: "Category not found", hasError: true });
    }

    // check if category has products
    const products = await Product.findAll({ where: { categoryID: id } });
    if (products.length > 0) {
      return res.status(400).json({
        message:
          "Category cannot be deleted because it has products. Please delete the products first",
        hasError: true,
      });
    }

    await category.destroy();
    res.status(200).json({
      message: "Category deleted successfully",
      category,
      hasError: false,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, hasError: true });
  }
};

export { AddCategory, FetchCategories, DeleteCategory };
