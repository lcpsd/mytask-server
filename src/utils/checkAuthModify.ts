import { verify } from "jsonwebtoken";
import { client } from "../config/prisma";
import { JWTpayloadProps } from "../types/auth";

export async function checkAuthModify(
    bearer: string,
    id: string,
    modelName: string,
    checkField: string,
) {


    const data = await client[modelName].findFirst({ where: { id } })

    const [, token] = bearer.split(" ")

    const { sub } = verify(token, process.env.JWT_SECRET) as JWTpayloadProps

    if (data[checkField]) {
        if (sub == data[checkField]) {
            return true
        }
    }

    return false
}