import {Router} from "express";
import TestRouter from "./test.router.js";
import AuthRouter from "./auth.router";

const router = Router();

router.use('/test', TestRouter);
router.use('/auth', AuthRouter);

export default router;
