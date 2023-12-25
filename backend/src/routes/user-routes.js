import express from "express";
import {createUser, getAllUsers, getUser} from "../controllers/user-controller.js";
import { login } from "../controllers/login-controller.js";
import { verifyToken } from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.get("/users", verifyToken, getAllUsers);
userRouter.get("/users/:id", verifyToken, getUser);
userRouter.post("/users", createUser);
userRouter.post("/login", login);