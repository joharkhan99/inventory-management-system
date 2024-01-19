import express from "express";
import CategoryRoutes from "./CategoryRoutes.js";

const router = express.Router();
router.use("/category", CategoryRoutes);

export default router;
