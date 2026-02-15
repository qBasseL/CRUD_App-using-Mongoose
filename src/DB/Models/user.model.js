import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    collection:"Users"
})

export const UserModel = mongoose.model("User", userSchema)