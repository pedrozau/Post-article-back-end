import { hash } from "bcrypt";
import { database } from "../../Prisma/connect"


interface User {
    email: string 
    name?: string 
    password: string 

}



export class CreateUserUseCase {
   
     async execute({email,name,password}:User) {
         
            const emailExiste =  await database.user.findFirst({ where: {  email } });
            
            if(emailExiste) {
                 return {
                    "error":"email already existe"
                 }
            }

            const  nameExiste = await database.user.findFirst({ where: { name }});

            if(nameExiste) {
                return {
                    "error":"name already existe"
                }

            }


            if( emailExiste && nameExiste){
                   return {
                      "error":"email and name already existe"
                   }
            }


            const passwordHash =  await hash(password,10) 


            const creata_user = await database.user.create({data:{email,name,password:passwordHash}})


            return creata_user


            

     }

}