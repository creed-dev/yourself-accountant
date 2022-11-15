import sequelize from "./config/db.js";
import router from "./routers/index.router.js";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/api', router);

app.listen(port, async () => {
    try {
        await sequelize.sync();
        console.log(`[server]: Server is running at localhost:${port}`);
    } catch (error) {
        console.log(error);
    }
});
