import express  from "express";
import { getProductController, addProductController, updateProductController, deleteProductController } from "../controllers/productController.js";

// Acá se generan las rutas con el controlador

const productRouter = express.Router();

productRouter.get("/getproducts", getProductController);

productRouter.post("/addproducts", addProductController);

productRouter.put("/updateproducts", updateProductController);

productRouter.post("/deleteproducts", deleteProductController);

export default productRouter;
