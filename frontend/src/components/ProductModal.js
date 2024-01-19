import React from "react";

const ProductModal = ({ showModal, setShowModal }) => {
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
            <form>
              <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Product Price</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter price"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Product Category</label>
                <select class="form-select">
                  <option selected>Select Category</option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Product Supplier</label>
                <select class="form-select">
                  <option selected>Select Supplier</option>
                </select>
              </div>

              <div class="modal-footer d-flex gap-3">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Submit
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
