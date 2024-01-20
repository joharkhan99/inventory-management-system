import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/Slices/categorySlice";
import { fetchSuppliers } from "../redux/Slices/supplierSlice";
import {
  addProduct,
  fetchProducts,
  setEditProduct,
  updateProduct,
} from "../redux/Slices/productSlice";
import DisplayMessage from "./DisplayMessage";

const ProductModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const { categories } = useSelector((state) => state.category);
  const { suppliers } = useSelector((state) => state.supplier);
  const response = useSelector((state) => state.product.response);
  const editProduct = useSelector((state) => state.product.editProduct);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(fetchCategories());
    dispatch(fetchSuppliers());
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(editProduct);

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.productName);
      setPrice(editProduct.productPrice);
      setCategory(editProduct.category.categoryId);
      setSupplier(editProduct.supplier.supplierId);
    }
  }, [editProduct]);

  const validateForm = () => {
    if (
      !name.trim() === "" ||
      price === "" ||
      category === "" ||
      supplier === ""
    ) {
      alert("Please fill all fields");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addProduct({ name, price, category, supplier }));
    dispatch(fetchProducts());
    setName("");
    setPrice("");
    setCategory("");
    setSupplier("");
    setShowModal(false);
  };

  const cancelModal = () => {
    setName("");
    setPrice("");
    setCategory("");
    setSupplier("");
    setShowModal(false);
    dispatch(setEditProduct(null));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(
      updateProduct({
        productId: editProduct.productId,
        name,
        price,
        category,
        supplier,
      })
    );
    setName("");
    setPrice("");
    setCategory("");
    setSupplier("");
    dispatch(setEditProduct(null));
    setShowModal(false);
  };

  return (
    <div
      class="modal-dialog modal-dialog-centered position-fixed top-0 start-0 w-100 h-100 bg-dark z-10 overflow-auto h-100 p-sm-5"
      style={{ "--bs-bg-opacity": "0.6" }}
    >
      <div class="modal-content row h-100 mx-auto">
        <div className="col-md-4 bg-white p-3 rounded mx-auto">
          <div class="modal-header">
            <h5 class="modal-title">Add New Product</h5>
            <button
              type="button"
              class="btn-close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>

          <div class="modal-body my-3">
            <DisplayMessage response={response} />

            <form onSubmit={editProduct ? handleUpdate : handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Product Price</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min={1}
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Product Category</label>
                <select
                  class="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected value="">
                    Select Category
                  </option>
                  {categories.map((category, index) => (
                    <option value={category.categoryId} key={index}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Product Supplier</label>
                <select
                  class="form-select"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                >
                  <option selected value="">
                    Select Supplier
                  </option>
                  {suppliers.map((supplier, index) => (
                    <option value={supplier.supplierId} key={index}>
                      {supplier.supplierName}
                    </option>
                  ))}
                </select>
              </div>

              <div class="modal-footer d-flex gap-3">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={cancelModal}
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  {editProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
