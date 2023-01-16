import { Prisma, Task } from "@prisma/client";
import { createPaginator } from "prisma-pagination";
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

    async readMany(page: string, userId: string) {
        const paginate = createPaginator({ perPage: 20 })

        const tasks = await paginate<Task, Prisma.TaskFindManyArgs>(
            client.task,
            {
                where: {
                    user_id: userId
                },
                orderBy: {
                    id: 'asc'
                }
            },
            { page }
        )

        return tasks
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