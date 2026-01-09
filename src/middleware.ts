import type {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import {JWT_PASSWORD} from './config.js'


export const userMiddleware = (req : Request, res: Response, next: NextFunction) => {
    //get header
    const header = req.header('Authorization')

    //Decoding the header
    const decode = jwt.verify(header as string, JWT_PASSWORD)

}