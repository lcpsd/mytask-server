import { Request, Response } from "express";
import { userService } from "../services/user";

export const userController = {
    async create(req: Request, res: Response) {
        try {
            const user = await userService.create(req.body)
            return res.status(200).json(user)

        } catch (error) {
            throw new Error("Error when try to create")
        }
    },
    async read(req: Request, res: Response) {
        try {
            const user = await userService.read(req.params.userId)
            return res.status(200).json(user)

        } catch (error) {
            throw new Error("Error when try to create")
        }
    },
    async update(req: Request, res: Response) {
        try {
            const user = await userService.update(req.params.userId, req.body)
            return res.status(200).json(user)
        } catch (error) {
            throw new Error("Error when try to update")
        }
    },
    async delete(req: Request, res: Response) {
        try {
            const user = await userService.delete(req.params.userId)
            return res.status(200).json(user)
        } catch (error) {
            throw new Error("Error when try to update")
        }
    },
}