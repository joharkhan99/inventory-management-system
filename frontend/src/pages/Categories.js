import React, { useState } from "react";
import CategoryTable from "../components/CategoryTable";

const Categories = () => {
  const [categoryName, setCategoryName] = useState("");

  return (
    <div>
      <div>
        <h3>Categories</h3>
      </div>

      <div>
        <div className="d-flex my-3 justify-content-start gap-3">
          <div className="">
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Enter new Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>

        <CategoryTable />
      </div>
    </div>
  );
};

export default Categories;
