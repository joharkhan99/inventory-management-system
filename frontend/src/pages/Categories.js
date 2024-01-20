import React from "react";
import CategoryTable from "../components/CategoryTable";
import CategoryForm from "../components/CategoryForm";
import { useSelector } from "react-redux";

const Categories = () => {
  const error = useSelector((state) => state.category.error);
  const response = useSelector((state) => state.category.response);

  return (
    <div>
      <div>
        <h3>Categories</h3>
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
        <CategoryForm />
        <CategoryTable />
      </div>
    </div>
  );
};

export default Categories;
