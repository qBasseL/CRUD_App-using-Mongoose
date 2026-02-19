import mongoose from "mongoose";
import { UserModel } from "../../DB/Models/index.js";

export const addUser = async (data) => {
  const { fullName, age, email, Gpa, gender } = data;
//   const user = new UserModel({firstName: firstName, age: age, email, Gpa, gender})
  // await user.save()

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await UserModel.insertOne({ fullName, age, email, Gpa, gender }, {validateBeforeSave: true, ordered: true, session});
    await session.commitTransaction()
    return user;
  } catch (error) {
    await session.abortTransaction()
    throw error
  } finally {
    await session.endSession()
  }
};

export const findUser = async (data) => {
    const user = await UserModel.findById(data)
    return user
}

export const findAll = async () => {
    const users = await UserModel.find({
        $and: [
            {gender: 'male'},
            {firstName: 'Bassel'}
        ]
    }).sort({age: 1})
    return users
}