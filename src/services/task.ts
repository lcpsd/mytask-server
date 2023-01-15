import { client } from "../config/prisma";
import { NewTaskProps, UpdateTaskProps } from "../types/task";

export const taskService = {
    async create(data: NewTaskProps) {
        const task = await client.task.create({ data })
        return task
    },

    async read(id: string) {
        const task = await client.task.findFirst({
            where: { id }
        })
        return task
    },

    async update(id: string, data: UpdateTaskProps) {
        const task = await client.task.update({
            where: { id }, data
        })

        return task
    },
    async delete(id: string) {
        const deleted = await client.task.delete({ where: { id } })
        return deleted
    }
}