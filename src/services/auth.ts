import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { client } from "../config/prisma";
import { UserLoginProps } from "../types/auth";

export const authService = {
    async login(data: UserLoginProps) {

        const user = await client.user.findFirst({
            where: { email: data.email }
        })

        if (!user) {
            throw new Error("User does not exists")
        }

        const match = await compare(data.password, user.password)

        if (!match) {
            throw new Error("Password incorrect")
        }

        const token = sign({
            email: user.email,
            name: user.name,
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "30d"
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token
        }
    }
}