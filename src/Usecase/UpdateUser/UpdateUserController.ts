import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export class UpdateUserController { 

     static async handler(req:Request, res:Response) {
     
     const id = req.params.id 
     const {email,name,password} = req.body 

     const update = new UpdateUserUseCase()

     const update_user = await update.execute({email,name,password},id)

     return res.json(update_user)
     
     }
}