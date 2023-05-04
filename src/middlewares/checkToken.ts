import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function  verify_token(req: Request, res: Response,next:NextFunction) {
        const autoToken = req.headers.authorization

        if(!autoToken) {
            return res.status(401).json({"error":"token is missing"})
        }

        const [,token] = autoToken.split(" ")

         try{
            verify(token,process.env.SECRET_KEY)
            return next()
         }catch(error){
               return res.status(401).json({"error":"token is invalid"})
         }
}