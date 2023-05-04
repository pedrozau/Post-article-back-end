import { sign } from "jsonwebtoken";



export  async function generateToken(userId: string)  {
 
       
          return  sign({},process.env.SECRET_KEY,{
            subject: userId,
             expiresIn:'15m'
          })
}
