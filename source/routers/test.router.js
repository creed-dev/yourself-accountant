import {Router} from 'express';
import {getTest} from "../controllers/test.controller.js";

const TestRouter = Router();

TestRouter.route('/').get(getTest);

export default TestRouter;
