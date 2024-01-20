import express from "express";
import CategoryRoutes from "./CategoryRoutes.js";
import SupplierRoutes from "./SupplierRoutes.js";
import ProductRoutes from "./ProductRoutes.js";

const router = express.Router();
router.use("/category", CategoryRoutes);
router.use("/supplier", SupplierRoutes);
router.use("/product", ProductRoutes);

export default router;
