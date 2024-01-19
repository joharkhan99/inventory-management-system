import dontenv from "dotenv";
import { Sequelize } from "sequelize";
dontenv.config();

const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
    return sequelize;
  } catch (error) {
    console.log("Unable to connect to the database: ", error.message);
  }
};

export default connectToDB;
