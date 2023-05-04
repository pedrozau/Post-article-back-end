import { database } from "../../Prisma/connect";


export class GetPostUseCase {
   
     async execute() {
        return await database.post.findMany(); 
     }

}