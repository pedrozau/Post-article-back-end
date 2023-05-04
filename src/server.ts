import express from 'express'; 
import cors from 'cors'
import { router_post } from './routes/Post';
import { user_route } from './routes/User';



const app = express() 


class App {
  
  static init_app() {
      app.use(express.json())
      app.use(cors())
      app.use("/api/v1/post", router_post)
      app.use("/api/v1/user",user_route)
      app.listen(5000, ()=> console.log("Server running..."));

   }

}


App.init_app();