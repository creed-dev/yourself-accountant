import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

export const verifyLogin = (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.replace("Bearer ", "");
    } else {
        token = null;
    }

    if (!token) {
        return res.status(403).send({
            status: false,
            message: "No token provided",
            data: null
        });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                status: false,
                message: "Unauthorized",
                data: null
            });
        }
        req.userId = decoded.id;
        next();
    });
};
