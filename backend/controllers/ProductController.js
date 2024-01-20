import Product from "../models/Product.model.js";

const AddProduct = async (req, res) => {
  try {
    const { productName, productPrice, productCategory, productSupplier } =
      req.body;
    const newproduct = await Product.create({
      productName: productName,
      productPrice: productPrice,
      categoryID: productCategory,
      supplierID: productSupplier,
    });
    await newproduct.save();

    const product = await Product.findOne({
      where: { productId: newproduct.productId },
      include: ["category", "supplier"],
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, hasError: true });
  }
};
const FetchProducts = async (req, res) => {
  try {
    // get products and populate category and supplier
    const products = await Product.findAll({
      include: ["category", "supplier"],
    });

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res
        .status(400)
        .json({ message: "Product not found", hasError: true });
    }

    await product.destroy();
    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, productPrice, productCategory, productSupplier } =
      req.body;
    const updatedProduct = await Product.findByPk(id);
    if (!updatedProduct) {
      return res
        .status(400)
        .json({ message: "Product not found", hasError: true });
    }

    updatedProduct.productName = productName;
    updatedProduct.productPrice = productPrice;
    updatedProduct.categoryID = productCategory;
    updatedProduct.supplierID = productSupplier;
    await updatedProduct.save();

    // get the updated product and populate category and supplier
    const product = await Product.findOne({
      where: { productId: updatedProduct.productId },
      include: ["category", "supplier"],
    });

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { AddProduct, FetchProducts, DeleteProduct, UpdateProduct };
