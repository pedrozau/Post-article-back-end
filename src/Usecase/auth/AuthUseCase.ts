import { compare } from "bcrypt";
import { database } from "../../Prisma/connect"
import { generateToken } from "../../provider/GenerateToken";


interface Login {
   
     email:string 
     password: string 

}


export class AuthUseCase {

     async execute({email,password}:Login) {
          
        const checkEmail =  await database.user.findFirst({where:{email}});

        if(!checkEmail){
           return {
               "error":"email or password is incorrect!"
           }
        }

        const checkPassword = await compare(password,checkEmail.password); 

        if(!checkPassword){
          return {
               "error":"email or password is incorrect!"
           }
        } 

        
        return  await generateToken(checkEmail.id); 

        


     }
}