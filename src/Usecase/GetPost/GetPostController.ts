import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";




export class GetPostController {

    static async handler(req: Request, res:Response) {
           
          const post = new GetPostUseCase(); 

          const get_post = await post.execute(); 

         return res.json(get_post)
          
     }
}