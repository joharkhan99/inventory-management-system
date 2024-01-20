import React from "react";
import SupplierTable from "../components/SupplierTable";
import SupplierForm from "../components/SupplierForm";
import { useSelector } from "react-redux";

const Suppliers = () => {
  const error = useSelector((state) => state.supplier.error);
  const response = useSelector((state) => state.supplier.response);

  return (
    <div>
      <div>
        <h3>Suppliers</h3>
      </div>
      {response && (
        <div className="alert alert-success" role="alert">
          {response}
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div>
        <SupplierForm />
        <SupplierTable />
      </div>
    </div>
  );
};

export default Suppliers;
