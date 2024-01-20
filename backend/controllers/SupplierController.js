import Product from "../models/Product.model.js";
import Supplier from "../models/Supplier.model.js";

const AddSupplier = async (req, res) => {
  try {
    const { supplierName, supplierAddress } = req.body;
    if (!supplierName || !supplierAddress) {
      return res
        .status(400)
        .json({ message: "Supplier name and address are required" });
    }

    const supplier = await Supplier.create({
      supplierName: supplierName,
      supplierAddress: supplierAddress,
    });
    await supplier.save();

    res.status(200).json({
      message: "Supplier added successfully",
      supplier,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, hasError: true });
  }
};

const FetchSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const DeleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      return res
        .status(400)
        .json({ message: "Supplier not found", hasError: true });
    }

    // check if supplier has products
    const products = await Product.findAll({ where: { supplierID: id } });
    if (products.length > 0) {
      return res.status(400).json({
        message:
          "Supplier cannot be deleted because it has products. Please delete the products first",
        hasError: true,
      });
    }

    await supplier.destroy();
    res.status(200).json({
      message: "Supplier deleted successfully",
      supplier,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const UpdateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const { supplierName, supplierAddress } = req.body;
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      return res
        .status(400)
        .json({ message: "Supplier not found", hasError: true });
    }

    supplier.supplierName = supplierName;
    supplier.supplierAddress = supplierAddress;
    await supplier.save();

    res.status(200).json({
      message: "Supplier updated successfully",
      supplier,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { AddSupplier, FetchSuppliers, DeleteSupplier, UpdateSupplier };
