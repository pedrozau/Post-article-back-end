import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";


export class CreatePostController { 

    static async handler(req: Request, res: Response){
      const {title,content,published,userId} = req.body 
       const   post = new CreatePostUseCase(); 

       const create_post = await post.execute({title,content,published,userId})

       return res.json(create_post)
     }
}