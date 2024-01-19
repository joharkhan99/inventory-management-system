import React from "react";

const ProductTable = () => {
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
              Price
            </th>
            <th scope="col" className="bg-transparent">
              Category
            </th>
            <th scope="col" className="bg-transparent">
              Supplier
            </th>
            <th scope="col" className="bg-transparent">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-transparent">1</td>
            <td className="bg-transparent">Product 1</td>
            <td className="bg-transparent">100</td>
            <td className="bg-transparent">Category 1</td>
            <td className="bg-transparent">Supplier 1</td>
            <td className="d-flex gap-2 bg-transparent">
              <button className="btn btn-sm btn-info text-white">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
