import UserController from "../controllers/userController";
import { Router } from "express";

const routes = Router();

routes.get("users/all", UserController.findAllUser);
routes.get("users/all/id", UserController.getUserById);
routes.post("users/create", UserController.registerNewUser);

export default routes;