import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";



export class UpdatePostController { 

      static async handler(req:Request, res: Response) { 
           const id = req.params.id 
           const {title,content,published,userId} = req.body 

           const update = new UpdatePostUseCase() 

           const update_post = await update.execute({title,content,published,userId},id)

           return res.json(update_post)
      }
}