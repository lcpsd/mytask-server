import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { JWTpayloadProps } from "../types/auth"

export async function createMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization: bearer } = req.headers

    if (!bearer) {
        return res.status(401).end()
    }

    const [, token] = bearer.split(" ")

    const { sub } = verify(token, process.env.JWT_SECRET) as JWTpayloadProps

    if (sub == req.params.userId) {
        next()
    } else {
        return res.status(401).end()
    }
}