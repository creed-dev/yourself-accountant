import {Express} from "express";
import router from "./routes/index.router";
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api', router);

app.listen(port, () => {
    console.log(`[server]: Server is running at localhost:${port}`);
});
