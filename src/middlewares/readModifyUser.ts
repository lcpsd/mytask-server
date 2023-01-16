import { NextFunction, Request, Response } from "express";
import { checkAuthModify } from "../utils/checkAuthModify";

export async function readModifyUserMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization: bearer } = req.headers

    if (!bearer) {
        return res.status(401).end()
    }

    const check = await checkAuthModify(bearer, req.params.userId, "user", "id")

    if (check) {
        next()
    } else {
        return res.status(401).end()
    }

}