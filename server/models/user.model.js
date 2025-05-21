import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fristname:{
        type:string,
        reqired:true
    },
    lastname:{
        type:string,
        reqired:true
    },
    email:{
        type:string,
        regired:true
    },
    password:{
        type:string,
        reqired:true
    },
});

const user = mongoose.model("user",userSchema);

export default user;
