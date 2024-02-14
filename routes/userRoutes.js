import express  from "express";
import { loginController, registertController } from "../controllers/userController.js";

// Acá se generan las rutas con el controlador

const userRouter = express.Router();

userRouter.post("/login", loginController);

userRouter.post("/register", registertController);

export default userRouter;