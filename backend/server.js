import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js"; 
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const initializeDB = async () => {
  try {
    const db = await connectDB(); 
    console.log("Connected to the SQLite database");
    app.use("/api/auth", authRoutes(db));
    app.use("/api/posts", postRoutes(db)); 
    app.listen(process.env.PORT || 5000, () => {
    console.log(" Server running on port 5000");
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

// Initialize DB & Start Server
initializeDB();
