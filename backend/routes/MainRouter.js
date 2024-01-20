import express from "express";
import CategoryRoutes from "./CategoryRoutes.js";
import SupplierRoutes from "./SupplierRoutes.js";

const router = express.Router();
router.use("/category", CategoryRoutes);
router.use("/supplier", SupplierRoutes);

export default router;
