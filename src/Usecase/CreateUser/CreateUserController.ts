import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";



export class CreateUserController  {
     

    static  async handler(req:Request, res:Response) {
           const {email,name,password} = req.body 
           
          const create =  new CreateUserUseCase(); 

          const user_create = await create.execute({
             email,
             name,
             password,
          })

         return  res.json(user_create)


      }
}