import { database } from "../../Prisma/connect";


export class GetUserUseCase  { 
   
        async execute(){
            return await database.user.findMany({select:{ id:true,email:true,name:true,password:false }});
        }
}