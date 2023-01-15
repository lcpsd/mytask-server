import { Router } from "express";
import { authController } from "./controllers/auth";
import { userController } from "./controllers/user";

const router = Router()

/* ---------------------------------- User ---------------------------------- */
router.post("/user", userController.create)

/* ---------------------------------- Auth ---------------------------------- */
router.post("/auth", authController.login)

export { router }