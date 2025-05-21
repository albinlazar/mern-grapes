import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
    const {
        firstName, lastName, email, password
    } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "all fields are required !"
        });
    }
    try {
        // fetch matching email from db
        const findUser = await User.findOne({ email });

        if (findUser) {
            return res.status(400).json({
                success: false,
                message: "user already exists !"
            }); l

        }
        // encrypt password
        const hashedpassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName, lastName, email, password: hashedpassword

        });
        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "signup success",
            user: newUser

        });
    } catch (error) {
        console.log(error);

        return res.status(400).json(
            {
                message: 'error creating new account',
                error: error.message
            }
        )
    }
}

export const SignIn = async (req, res) => {
    try {
        const dbUser = await findOne({ email })

        if (!user) {
            await res.status(400).json({
                message: 'no such user',
                error: error.message
            })
        }

        const isPasswordValid = await bcrypt.compare(password, dbUser.password)

        const { password: _, ...rest } = dbUser.toObj()

        const jwttoken = jwt.sign({
            id: rest._id,
            isAdmin: rest.isAdmin || false
        },
            process.env.JWT_secret,
            res.cookie(
                "access_token"),
            token
        )
    }
    catch (err) {
        console.log(err.message)
    }
}

export const SignOut = (req, res) => {
    try {
        res.clearCookie(access_)
    } catch (err) {
        console.log(err.message)
    }
}