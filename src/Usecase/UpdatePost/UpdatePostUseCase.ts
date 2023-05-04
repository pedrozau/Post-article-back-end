import { database } from "../../Prisma/connect"

interface Post {
    title: string 
    content: string 
    published?: boolean 
    userId: string 
}

export class UpdatePostUseCase  {
    async execute({title,content,published,userId}:Post,id:string) {
         
            const checkId = await database.post.findFirst({ where: { id }})

            if (!checkId) {

                 return {
                     "error":"id invalid!"
                 }
            }


            return  await database.post.update({ data: { title,content,published,userId}, where:{ id } }) 

            

    } 
}