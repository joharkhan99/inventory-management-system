import React from "react";
import SupplierTable from "../components/SupplierTable";
import SupplierForm from "../components/SupplierForm";
import { useSelector } from "react-redux";
import DisplayMessage from "../components/DisplayMessage";

const Suppliers = () => {
  const response = useSelector((state) => state.supplier.response);

  return (
    <div>
      <div>
        <h3>Suppliers</h3>
      </div>
      <DisplayMessage response={response} />
      <div>
        <SupplierForm />
        <SupplierTable />
      </div>
    </div>
  );
};

export default Suppliers;
