import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  setEditProduct,
} from "../redux/Slices/productSlice";

const ProductTable = ({ setShowModal }) => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleDelete = (productId) => {
    dispatch(deleteProduct({ productId }));
  };

  const handleEdit = (product) => {
    dispatch(setEditProduct(product));
    setShowModal(true);
  };

  return (
    <div className="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="bg-transparent">
              #
            </th>
            <th scope="col" className="bg-transparent">
              Name
            </th>
            <th scope="col" className="bg-transparent">
              Price
            </th>
            <th scope="col" className="bg-transparent">
              Category
            </th>
            <th scope="col" className="bg-transparent">
              Supplier
            </th>
            <th scope="col" className="bg-transparent">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td className="bg-transparent">{index + 1}</td>
                <td className="bg-transparent">{product.productName}</td>

                <td className="bg-transparent">{product.productPrice}</td>

                <td className="bg-transparent">
                  {product.category.categoryName}
                </td>

                <td className="bg-transparent">
                  {product.supplier.supplierName}
                </td>

                <td className="d-flex gap-2 bg-transparent">
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(product.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="bg-transparent">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
