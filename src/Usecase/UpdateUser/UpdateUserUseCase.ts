import { hash } from "bcrypt";
import { database } from "../../Prisma/connect"


interface User {
    email: string 
    name?: string 
    password: string 

}



export class UpdateUserUseCase {
   
     async execute({email,name,password}:User,id:string) {
         
            const checkId =  await database.user.findFirst({where:{id}}) 

            if(!checkId) {
                return {
                    "error":"id invalid"
                }
            }

            const passwordHash = await hash(password,10)


            return await database.user.update({data:{email,name,password:passwordHash}, where:{id}})


            

     }

}