import { Request, Response } from "express";
import { AuthUseCase } from "./AuthUseCase";



export class AuthController  { 
    
     static async handler(req: Request, res: Response) { 
        try{
            const {email, password } = req.body; 
        
            const auth = new AuthUseCase(); 
    
            const token = await auth.execute({email, password});
    
            res.json(token);
        }catch(error){
            res.json({
                "error":error
            })
        }
        

     } 

}