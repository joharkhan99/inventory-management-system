import express from "express";
import {
  AddCategory,
  FetchCategories,
  DeleteCategory,
} from "../controllers/CategoryController.js";

const router = express.Router();
router.post("/", AddCategory);
router.get("/", FetchCategories);
router.delete("/:id", DeleteCategory);

export default router;
