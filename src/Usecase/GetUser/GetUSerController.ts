import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";





export class GetUserController {

     static async handler(req: Request, res:Response) {
             
            const user = new GetUserUseCase(); 
             
            const get_user = await user.execute(); 

            return res.json(get_user)

      }
}