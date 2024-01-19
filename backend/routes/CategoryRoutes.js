import express from "express";
import {
  AddCategory,
  FetchCategories,
} from "../controllers/CategoryController.js";

const router = express.Router();
router.post("/", AddCategory);
router.get("/", FetchCategories);

export default router;
