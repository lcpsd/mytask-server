import multer from "multer";
import { resolve } from "path"
import crypto from "crypto"

function config(folder: string) {
    return {
        storage: multer.diskStorage({
            destination: resolve(__dirname, "..", "..", folder),
            filename: (_, file, callback) => {
                const fileHash = crypto.randomBytes(16).toString("hex")
                const fileName = `${fileHash}-${file.originalname}`

                return callback(null, fileName)
            }
        })
    }
}

export const upload = multer(config("./public"))