import { Request, Response } from "express";
import { userService } from "../services/user";

export const userController = {
    async create(req: Request, res: Response) {
        const user = await userService.create(req.body)
        return res.status(200).json(user)
    },
    async read(req: Request, res: Response) {

    },
    async update(req: Request, res: Response) {

    },
    async delete(req: Request, res: Response) {

    },
}