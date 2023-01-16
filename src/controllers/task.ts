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
            console.log(error.message)
            throw new Error("Error when try to create")
        }
    },
    async read(req: Request, res: Response) {
        try {
            const task = await taskService.read(req.params.id)
            return res.status(200).json(task)
        } catch (error) {
            throw new Error("Error when try to read")
        }
    },

    async readMany(req: Request, res: Response) {
        try {
            const tasks = await taskService.readMany(req.params.page, req.params.userId)
            return res.json(tasks)
        } catch (error) {
            throw new Error("Error when try to read Many")
        }
    },

    async update(req: Request, res: Response) {
        try {
            const task = await taskService.update(req.params.taskId, req.body)
            return res.status(200).json(task)
        } catch (error) {
            throw new Error("Error when try to update")
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const task = await taskService.delete(req.params.taskId)
            return res.status(200).json(task)
        } catch (error) {
            throw new Error("Error when try to delete")
        }
    }
}