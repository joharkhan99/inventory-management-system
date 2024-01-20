import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteSupplier,
  fetchSuppliers,
  setEditSupplier,
} from "../redux/Slices/supplierSlice";

const SupplierTable = () => {
  const { suppliers } = useSelector((state) => state.supplier);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, []);

  const handleDelete = (supplierId) => {
    dispatch(deleteSupplier({ supplierId }));
  };

  const handleEdit = (supplier) => {
    dispatch(setEditSupplier(supplier));
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
              Address
            </th>
            <th scope="col" className="bg-transparent">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {suppliers.length > 0 ? (
            suppliers.map((supplier, index) => (
              <tr key={index}>
                <td className="bg-transparent">{index + 1}</td>
                <td className="bg-transparent">{supplier.supplierName}</td>

                <td className="bg-transparent">{supplier.supplierAddress}</td>

                <td className="d-flex gap-2 bg-transparent">
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => handleEdit(supplier)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(supplier.supplierId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No suppliers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
