import jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from './config.js';
export const userMiddleware = (req, res, next) => {
    //get header
    const header = req.header('Authorization');
    //Decoding the header
    const decode = jwt.verify(header, JWT_PASSWORD);
    if (decode) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not logged in"
        });
    }
};
//# sourceMappingURL=middleware.js.map