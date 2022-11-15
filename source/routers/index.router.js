import {Router} from "express";
import TestRouter from "./test.router.js";

const router = Router();

router.use('/test', TestRouter);

export default router;
