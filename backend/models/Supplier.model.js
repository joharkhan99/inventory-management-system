import connectToDB from "../config/db.js";
import { DataTypes } from "sequelize";

const sequelize = await connectToDB();

// check if database connection is successful
if (sequelize) {
  // create the supplier table schema
  const Supplier = sequelize.define(
    "supplier",
    {
      supplierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      supplierName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplierAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  // sync the supplier table with the database
  Supplier.sync()
    .then(() => {
      console.log("Supplier table created");
    })
    .catch((err) => {
      console.log(err);
    });
}
