import connectToDB from "../config/db.js";
import { DataTypes } from "sequelize";

const sequelize = await connectToDB();

// check if database connection is successful
if (sequelize) {
  // create the category table schema
  const Category = sequelize.define(
    "category",
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  // sync the category table with the database
  Category.sync()
    .then(() => {
      console.log("Category table created");
    })
    .catch((err) => {
      console.log(err);
    });
}
