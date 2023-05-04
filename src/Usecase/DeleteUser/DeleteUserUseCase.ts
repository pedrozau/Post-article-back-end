import { database } from "../../Prisma/connect";


export class DeleteUserUseCase { 
    static async execute(id:string) {

        const checkId = await database.user.findFirst({where:{id}})

        if(!checkId) {
            return {
                "error":"id invalid"
            }
        }

        return await  database.user.delete({where:{id}})
    }
}