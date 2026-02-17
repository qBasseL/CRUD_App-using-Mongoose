import { UserModel } from "../../DB/Models/index.js";

export const addUser = async (data) => {
    const {firstName, age, email, Gpa, gender} = data
    const user = new UserModel({firstName: firstName, age: age, email, Gpa, gender})
    await user.save()
    return user
}