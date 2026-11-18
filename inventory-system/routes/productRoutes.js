import express from "express";
import {
  createProduct,
  getAllProducts,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
  adjustStock,
  getLowStock,
  getCategorySummary,
} from "../controllers/productController.js";

const router = express.Router();


router.get("/low-stock", getLowStock);
router.get("/summary", getCategorySummary);
router.get("/get-products-data",getAllProducts)


router.route("/").get(getProducts).post(createProduct);


router
  .route("/:id")
  .get(getProductsById)
  .put(updateProduct)
  .delete(deleteProduct);


router.patch("/:id/stock", adjustStock);

export default router;
