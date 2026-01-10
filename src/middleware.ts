import type {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import {JWT_PASSWORD} from './config.js'


export const userMiddleware = (req : Request, res: Response, next: NextFunction) => {
    //get header
    const header = req.header('Authorization')

    //Decoding the header
    const decode = jwt.verify(header as string, JWT_PASSWORD)
    if(decode){
        //@ts-ignore
        req.userId = decoded.id
        next();
    }else{
        res.status(403).json({
            message: "You are not logged in"
        })
    }


}