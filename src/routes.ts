import { Router } from "express";
import { upload } from "./config/multer";
import { authController } from "./controllers/auth";
import { taskController } from "./controllers/task";
import { userController } from "./controllers/user";

const router = Router()

/* ---------------------------------- User ---------------------------------- */
router.post("/user", userController.create)

/* ---------------------------------- Task ---------------------------------- */
router.post("/task/user/:userId", upload.single("image"), taskController.create)

/* ---------------------------------- Auth ---------------------------------- */
router.post("/auth", authController.login)

export { router }