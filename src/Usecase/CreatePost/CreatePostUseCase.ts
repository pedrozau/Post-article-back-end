import { database } from "../../Prisma/connect"

interface Post {
    title: string 
    content: string 
    published?: boolean 
    userId: string 
}

export class CreatePostUseCase  {
    async execute({title,content,published,userId}:Post) {
         
          const  create_post =  await database.post.create({ data: { title, content, published, userId}});

          return create_post;

    } 
}