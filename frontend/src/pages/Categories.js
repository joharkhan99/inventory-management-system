import React, { useEffect, useState } from "react";
import CategoryTable from "../components/CategoryTable";
import CategoryForm from "../components/CategoryForm";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/category`
    );
    const response = await request.json();
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div>
        <h3>Categories</h3>
      </div>

      <div>
        <CategoryForm categorySubmitted={fetchCategories} />
        <CategoryTable categories={categories} />
      </div>
    </div>
  );
};

export default Categories;
