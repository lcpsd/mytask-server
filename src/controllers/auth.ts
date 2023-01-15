import { Request, Response } from "express"
import { authService } from "../services/auth"

export const authController = {
    async login(req: Request, res: Response) {
        const token = await authService.login(req.body)

        return res.status(200).json(token)
    }
}