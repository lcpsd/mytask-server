import { Router } from "express";
import { upload } from "./config/multer";
import { authController } from "./controllers/auth";
import { taskController } from "./controllers/task";
import { userController } from "./controllers/user";
import { createMiddleware } from "./middlewares/create";
import { readModifyTaskMiddleware } from "./middlewares/readModifyTask";

const router = Router()

/* ---------------------------------- User ---------------------------------- */
router.post("/user", userController.create)

/* ---------------------------------- Task ---------------------------------- */
router.post("/task/user/:userId", createMiddleware, upload.single("image"), taskController.create)
router.get("/task/:taskId", readModifyTaskMiddleware, taskController.read)
router.put("/task/:taskId", readModifyTaskMiddleware, taskController.update)
router.delete("/task/:taskId", readModifyTaskMiddleware, taskController.delete)

/* ---------------------------------- Auth ---------------------------------- */
router.post("/auth", authController.login)

export { router }