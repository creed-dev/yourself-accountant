import * as db from '../models';

const User = db.User;

export const checkEmailExist = async (req, res, next) => {
    try {
        const exist = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (exist) {
            return res.status(409).send({
                status: false,
                message: "User with this email is already registered",
                data: null
            });
        }

        next();
    } catch (error) {
        console.log(error);
    }
};
