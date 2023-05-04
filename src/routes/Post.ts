import {Router} from "express"; 
import { CreatePostController } from "../Usecase/CreatePost/CreatePostController";
import { GetPostController } from "../Usecase/GetPost/GetPostController";
import { verify_token } from "../middlewares/checkToken";
import { UpdatePostController } from "../Usecase/UpdatePost/UpdatePostController";
import { DeletePostController } from "../Usecase/DeletePost/DeletePostController";


export const router_post = Router(); 


router_post.route("/").post(verify_token,CreatePostController.handler).get(GetPostController.handler)
router_post.route("/:id").put(verify_token,UpdatePostController.handler).delete(verify_token,DeletePostController.handler)