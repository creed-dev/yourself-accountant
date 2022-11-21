import router from "./routes/index.router.js";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router);

app.listen(port, async () => {
    console.log(`[server]: Server is running at localhost:${port}`);
});
