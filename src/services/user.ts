import { hash } from "bcryptjs";
import { client } from "../config/prisma";
import { NewUserProps } from "../types/user";

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
    }
}