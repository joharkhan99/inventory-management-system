import connectToDB from "../config/db.js";
import { DataTypes } from "sequelize";

const sequelize = await connectToDB();

// check if database connection is successful
if (!sequelize) {
  console.log("Unable to connect to database");
  process.exit(1);
}
// create the product table schema
const Product = sequelize.define(
  "product",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "categoryId",
      },
    },
    supplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "suppliers",
        key: "supplierId",
      },
    },
  },
  {
    timestamps: true,
  }
);

// sync the product table with the database
Product.sync()
  .then(() => {
    console.log("Product table created");
  })
  .catch((err) => {
    console.log(err);
  });

export default Product;
