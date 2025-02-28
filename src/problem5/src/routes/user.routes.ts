import {Router} from "express";
import { UserController } from "../user/user.controller";

const userRouter = Router();

userRouter.post("/users", UserController.create);
userRouter.get("/users", UserController.getAll);
userRouter.get("/users/:id", UserController.getById);
userRouter.put("/users/:id", UserController.update);
userRouter.delete("/users/:id", UserController.deleteById);

export default userRouter;
