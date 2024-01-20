import React from "react";
import CategoryTable from "../components/CategoryTable";
import CategoryForm from "../components/CategoryForm";
import { useSelector } from "react-redux";
import DisplayMessage from "../components/DisplayMessage";

const Categories = () => {
  const response = useSelector((state) => state.category.response);

  return (
    <div>
      <div>
        <h3>Categories</h3>
      </div>
      <DisplayMessage response={response} />
      <div>
        <CategoryForm />
        <CategoryTable />
      </div>
    </div>
  );
};

export default Categories;
