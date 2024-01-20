import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/Slices/categorySlice";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const validateForm = () => {
    if (categoryName.trim() === "") {
      alert("Please enter a category name");
      return false;
    }
    return true;
  };

  const AddCategory = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addCategory({ categoryName }));
    setCategoryName("");
  };

  return (
    <form
      className="d-flex my-3 justify-content-start gap-3"
      onSubmit={AddCategory}
    >
      <div>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Enter new Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
