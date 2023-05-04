import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export class DeleteUserController {

     static async handler(req: Request, res: Response) {
        const id = req.params.id 

        const del_user = await DeleteUserUseCase.execute(id) 

        return res.json(del_user)
     }
}