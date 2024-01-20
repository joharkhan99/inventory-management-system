import express from "express";
import {
  AddSupplier,
  FetchSuppliers,
  DeleteSupplier,
  UpdateSupplier,
} from "../controllers/SupplierController.js";

const router = express.Router();

router.post("/", AddSupplier);
router.get("/", FetchSuppliers);
router.delete("/:id", DeleteSupplier);
router.put("/:id", UpdateSupplier);

export default router;
