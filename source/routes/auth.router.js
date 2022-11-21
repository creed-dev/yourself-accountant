import {Router} from 'express';
import {login, signup} from "../controllers/user.controller";
import {checkEmailExist} from "../middlewares/user.middleware";

const AuthRouter = Router();

AuthRouter.post('/signup', checkEmailExist, signup);
AuthRouter.post('/login', login);

export default AuthRouter;
