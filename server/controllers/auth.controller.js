import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400).json({
            success: false,
            message: "all fields are reqired"
        })
    }
}
try{
    const finduser=await user.findone({email});

    if(finduser){
        res.status(400).json
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newser = new user({
        firstName,lastName,email,password: hashedPassword
    });
    await newuser.save();
    res.status(200),json({success:true, message:"sign Up Success",user:newuser});
    
}catch (error){
    console.log(error);


    res.status(400).json(
        {
            message:"error creating new account",
            error: error
        }
    )
}





