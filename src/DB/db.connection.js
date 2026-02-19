import mongoose from "mongoose";
import { DB_URI } from "../../config/config.service.js";
import { UserModel } from "./Models/user.model.js";

export const authenticateDB = async() => {
    try {
        const databaseConnection = await mongoose.connect(DB_URI, {serverSelectionTimeoutMS: 2000})
        // console.log(databaseConnection);
        await UserModel.syncIndexes()   
        console.log(`Database Connected Successfully`);
    } catch (err) {
        console.error(`Couldn't Connet To Database`, err)
    }
}


