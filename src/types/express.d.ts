import { JWTpayloadProps } from "./auth";

declare module "express-serve-static-core" {
    export interface Request {
        user: JWTpayloadProps;
    }
}