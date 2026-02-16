import mongoose from "mongoose";
import { DB_URI } from "../../config/config.service.js";

export const authenticateDB = async() => {
    try {
        const databaseConnection = await mongoose.connect(DB_URI)
        // console.log(databaseConnection);
        console.log(`Database Connected Successfully`);
    } catch (err) {
        console.error(`Couldn't Connet To Database`, err)
    }
}