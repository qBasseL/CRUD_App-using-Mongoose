import { UserModel } from "../../DB/Models/index.js";

export const addUser = async (data) => {
    const {firstName, age, email, Gpa} = data
    const user = new UserModel({firstName: firstName, age: age, email, Gpa})
    await user.save()
    return user
}