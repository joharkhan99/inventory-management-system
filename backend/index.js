import express from "express";
import dontenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDB from "./config/db.js";
import MainRouter from "./routes/MainRouter.js";
dontenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", MainRouter);

const PORT = process.env.SERVER_PORT || 8080;
const sequelize = await connectToDB();
if (sequelize) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
