import { Router } from "express";
import { userController } from "./controllers/user";

const router = Router()

/* ---------------------------------- User ---------------------------------- */
router.post("/user", userController.create)

export { router }