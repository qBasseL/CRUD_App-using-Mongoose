import { UserModel } from "../../DB/Models/index.js";

export const addUser = async (data) => {
    const {firstName, age} = data
    const user = new UserModel({firstName: firstName, age: age})
    await user.save()
    return user
}