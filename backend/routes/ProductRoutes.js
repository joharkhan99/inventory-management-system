import express from "express";

import {
  AddProduct,
  FetchProducts,
  DeleteProduct,
  UpdateProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.post("/", AddProduct);
router.get("/", FetchProducts);
router.delete("/:id", DeleteProduct);
router.put("/:id", UpdateProduct);

export default router;
