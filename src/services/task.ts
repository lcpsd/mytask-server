import { client } from "../config/prisma";
import { NewTaskProps } from "../types/task";

export const taskService = {
    async create(data: NewTaskProps) {
        const task = await client.task.create({ data })
        return task
    }
}