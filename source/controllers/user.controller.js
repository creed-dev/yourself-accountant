import * as bcrypt from "bcrypt";
import * as db from "../models";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

const User = db.User;

export const signup = async (req, res) => {
    try {
        const {email, password} = req.body;
        const data = {
            email,
            password: await bcrypt.hash(password, 10),
        };

        const user = await User.create(data);

        if (user) {
            const token = jwt.sign({id: user.id}, secretKey, {
                expiresIn: 24 * 60 * 60 * 1000,
            });

            return res.status(201).send({
                status: true,
                message: "User has been successfully registered",
                data: {
                    user,
                    jwtToken: token
                }
            });
        } else {
            return res.status(409).send({
                status: false,
                message: "Details are not correct",
                data: null
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (user) {
            const passwordIsSame = await bcrypt.compare(password, user.password);

            if (passwordIsSame) {
                const token = jwt.sign({id: user.id}, secretKey, {
                    expiresIn: 24 * 60 * 60 * 1000,
                });

                return res.status(201).send({
                    status: true,
                    message: "User has been successfully login",
                    data: {
                        user,
                        jwtToken: token
                    }
                });
            } else {
                return res.status(403).send(
                    {
                        status: false,
                        message: "Email or password is incorrect",
                        data: null
                    });
            }
        } else {
            return res.status(409).send(
                {
                    status: false,
                    message: "User with this email is not registered",
                    data: null
                });
        }
    } catch (error) {
        console.log(error);
    }
};
