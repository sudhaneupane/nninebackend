import { Router } from "express";
import {
  deleteUser,
  register,
  signIn,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.route("/").post(register);
userRouter.route("/sign-in").post(signIn);
userRouter.route("/:id").patch(updateUser);
userRouter.route("/:id").delete(deleteUser);

export default userRouter;
