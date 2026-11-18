import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// this is middleware
app.use(express.json());
app.use(errorHandler);

// this is routes
app.use("/all/api/products", productRoutes);

app.get("/",(req,res)=>{
  res.send(`This is Home Page go this routes and search now Go main routes <h1>/all/api/products<h1/> <br> go low stock routes <h1>/all/api/products/low-stock<h1/> <br> go product summary routes <h1>/all/api/products/summary<h1/>`)
})

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
