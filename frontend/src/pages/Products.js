import React, { useState } from "react";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";
import { useSelector } from "react-redux";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const response = useSelector((state) => state.product.response);

  return (
    <div>
      <div>
        <h3>Products</h3>
      </div>

      {response && (
        <div className="alert alert-info" role="alert">
          {response}
        </div>
      )}

      <div>
        <div className="d-flex my-3 justify-content-end gap-3">
          <div className="">
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Search list..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Add Product
            </button>
          </div>
        </div>

        <ProductTable setShowModal={setShowModal} />
      </div>

      {showModal && (
        <ProductModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Products;
