import express  from "express";
import { addBillsController, getBillsController } from "../controllers/billsController.js";

// Acá se generan las rutas con el controlador

const billsRouter = express.Router();

billsRouter.post("/addbills", addBillsController);

billsRouter.get("/getbills", getBillsController);

export default billsRouter;
