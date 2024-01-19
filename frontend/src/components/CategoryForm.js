import React, { useState } from "react";

const CategoryForm = ({ categorySubmitted }) => {
  const [categoryName, setCategoryName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (categoryName.trim() === "") {
      alert("Please enter a category name");
      setIsSubmitting(false);
      return false;
    }
    return true;
  };

  const AddCategory = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      const request = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/category`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryName }),
        }
      );

      const response = await request.json();

      if (response.hasError) {
        alert(response.message);
        setIsSubmitting(false);
        return;
      }

      alert("Category added successfully");
      setCategoryName("");
      setIsSubmitting(false);
      categorySubmitted();
    }
  };

  return (
    <form className="d-flex my-3 justify-content-start gap-3">
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
        <button
          className="btn btn-primary"
          type="submit"
          onClick={AddCategory}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            "Add"
          )}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
