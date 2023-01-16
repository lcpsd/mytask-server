import { Router } from "express";
import { upload } from "./config/multer";
import { authController } from "./controllers/auth";
import { taskController } from "./controllers/task";
import { userController } from "./controllers/user";
import { checkTokenUserIdMiddleware } from "./middlewares/checkTokenUserId";
import { readModifyTaskMiddleware } from "./middlewares/readModifyTask";
import { readModifyUserMiddleware } from "./middlewares/readModifyUser";

const router = Router()

/* ---------------------------------- User ---------------------------------- */
router.post("/user", userController.create)
router.get("/user/:userId", readModifyUserMiddleware, userController.read)
router.put("/user/:userId", readModifyUserMiddleware, userController.update)
router.delete("/user/:userId", readModifyUserMiddleware, userController.delete)

/* ---------------------------------- Task ---------------------------------- */
router.post("/task/user/:userId", checkTokenUserIdMiddleware, upload.single("image"), taskController.create)
router.get("/task/:taskId", readModifyTaskMiddleware, taskController.read)
router.get("/task/readMany/page/:page/user/:userId", checkTokenUserIdMiddleware, taskController.readMany)
router.put("/task/:taskId", readModifyTaskMiddleware, taskController.update)
router.delete("/task/:taskId", readModifyTaskMiddleware, taskController.delete)

/* ---------------------------------- Auth ---------------------------------- */
router.post("/auth", authController.login)

export { router }