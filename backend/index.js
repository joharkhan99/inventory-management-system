import express from "express";
import dontenv from "dotenv";
import connectToDB from "./config/db.js";
dontenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

const sequelize = await connectToDB();
if (sequelize) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
