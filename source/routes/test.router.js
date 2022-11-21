import {Router} from 'express';
import {getTest} from "../controllers/test.controller";
import {verifyLogin} from "../middlewares/jwt.middleware";

const TestRouter = Router();

TestRouter.get('/',verifyLogin, getTest);

export default TestRouter;
