import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSupplier,
  setEditSupplier,
  updateSupplier,
} from "../redux/Slices/supplierSlice";

const SupplierForm = () => {
  const [supplierName, setSupplierName] = useState("");
  const [supplierAddress, setSupplierAddress] = useState("");
  const editSupplier = useSelector((state) => state.supplier.editSupplier);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editSupplier) {
      setSupplierName(editSupplier.supplierName);
      setSupplierAddress(editSupplier.supplierAddress);
    }
  }, [editSupplier]);

  const validateForm = () => {
    if (supplierName.trim() === "" || supplierAddress.trim() === "") {
      alert("Please enter a supplier name and address");
      return false;
    }
    return true;
  };

  const AddSupplier = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addSupplier({ supplierName, supplierAddress }));
    setSupplierName("");
    setSupplierAddress("");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(
      updateSupplier({
        supplierId: editSupplier.supplierId,
        supplierName,
        supplierAddress,
      })
    );
    setSupplierName("");
    setSupplierAddress("");
    dispatch(setEditSupplier(null));
  };

  return (
    <form
      className="d-flex my-3 justify-content-center align-items-center gap-3 flex-column"
      onSubmit={editSupplier ? handleUpdate : AddSupplier}
    >
      <div>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Enter supplier name"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Enter supplier address"
          value={supplierAddress}
          onChange={(e) => setSupplierAddress(e.target.value)}
        />
      </div>

      <div>
        <button className="btn btn-primary" type="submit">
          {editSupplier ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default SupplierForm;
