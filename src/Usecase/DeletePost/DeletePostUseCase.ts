import { database } from "../../Prisma/connect";

export class DeletePostUseCase {

     async execute(id:string) {
         const checkId = await database.post.findFirst({where:{id}})

         if(!checkId) {

            return {
                "error":"id invalid"
            }
         }

         return await database.post.delete({where:{id}})


     }
}