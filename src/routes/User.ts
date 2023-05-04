import {Router} from 'express' 
import { CreateUserController } from '../Usecase/CreateUser/CreateUserController';
import { GetUserController } from '../Usecase/GetUser/GetUSerController';
import { AuthController } from '../Usecase/auth/AuthController';
import { verify_token } from '../middlewares/checkToken';
import { UpdateUserController } from '../Usecase/UpdateUser/UpdateUserController';


export const  user_route = Router(); 



user_route.route("/").get(verify_token,GetUserController.handler).post(CreateUserController.handler)
user_route.route("/auth").post(AuthController.handler)
user_route.route("/:id").put(verify_token,UpdateUserController.handler).delete(verify_token)
