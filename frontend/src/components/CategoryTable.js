import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, fetchCategories } from "../redux/Slices/categorySlice";

const CategoryTable = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleDelete = (categoryId) => {
    dispatch(deleteCategory({ categoryId }));
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr key={index}>
                <td className="bg-transparent">{index + 1}</td>
                <td className="bg-transparent">{category.categoryName}</td>
                <td className="d-flex gap-2 bg-transparent">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(category.categoryId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No categories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
