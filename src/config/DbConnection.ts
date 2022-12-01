import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: "./src/config/config.env" });

class DatabaseConnection {
  getConnection() {
    mongoose
      .connect(process.env.MONGO_URI)
      .then((conn) => console.log("mongoDB Connected..."))
      .catch((err) => console.log(err));
  }
}

export = new DatabaseConnection();
