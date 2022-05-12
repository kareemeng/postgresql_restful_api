import express from 'express';
import jwt from 'jsonwebtoken';

export const check_token = async (
    req: express.Request,
    res: express.Response,
    next: Function
) => {
    try {
        const auth_token = req.headers.authorization as string;;
        const token= auth_token.split(' ')[1];
        await jwt.verify(token, process.env.SECRET as string);
        next();
    } catch (err) {
        res.status(401).send(`Access denied, invalid token - ${err}`);
    }
};
