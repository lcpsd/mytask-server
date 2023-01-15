import { Request, Response, response } from "express"
import { taskService } from "../services/task"

export const taskController = {
    async create(req: Request, res: Response) {
        try {
            const task = await taskService.create({
                ...req.body,
                user_id: req.params.userId,
                image: req.file.filename
            })
            return res.status(200).json(task)
        } catch (error) {
            throw new Error(error.message)
        }
    },
    async read(req: Request, res: Response) {
        try {
            const task = await taskService.read(req.params.id)
            return res.status(200).json(task)
        } catch (error) {
            throw new Error(error.message)
        }
    },

    async update(req: Request, res: Response) {
        try {
            const task = await taskService.update(req.params.taskId, req.body)
            return res.status(200).json(task)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}