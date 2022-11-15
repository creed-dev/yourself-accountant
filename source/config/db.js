import {Sequelize} from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`);

export default sequelize;
