import { hash } from "bcryptjs";
import { client } from "../config/prisma";
import { NewUserProps, UpdateUserProps } from "../types/user";

export const userService = {
    async create(data: NewUserProps) {
        const checkExist = await client.user.findFirst({
            where: {
                email: data.email
            }
        })

        if (checkExist) {
            throw new Error("User aready exists.")
        }

        const passwordHash = await hash(data.password, 8)

        const user = await client.user.create({
            data: {
                ...data,
                password: passwordHash
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        })

        return user
    },

    async read(id: string) {
        const user = client.user.findFirst({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
            }
        })
        return user
    },

    async update(id: string, data: UpdateUserProps) {
        const user = client.user.update({
            where: { id },
            data,
            select: { id: true, name: true, email: false }
        })

        return user
    },

    async delete(id: string) {

    }
}