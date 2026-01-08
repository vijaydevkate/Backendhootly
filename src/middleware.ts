import type {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken'

const JWT_PASSWORD = "!23123"

export const userMiddleware = (req : Request, res: Response, next: NextFunction) => {
    //get header
    const header = req.header('Authorization')

    //Decoding the header
    const decode = jwt.verify(header as string, JWT_PASSWORD)

}