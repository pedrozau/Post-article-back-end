import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";



export class DeletePostController {

      static async handler(req:Request, res:Response){
          const id = req.params.id 
          const del = new DeletePostUseCase()

          const del_post = await del.execute(id)

          return res.json(del_post)

      }
}