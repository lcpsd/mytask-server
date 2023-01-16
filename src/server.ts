import Express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import "express-async-errors"
import { router } from "./routes"
import path from "path"

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(router)
app.use("/images", Express.static(path.resolve(__dirname, "..", "public/images")))
app.use("/files", Express.static(path.resolve(__dirname, "..", "public")))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(3333, () => console.log("Server OK"))