import mongoose from "mongoose";
import { UserModel } from "../../DB/Models/index.js";
import { errorException, conflictException } from "../../Common/utils/index.js";

export const addUser = async (data) => {
  const { fullName, age, email, Gpa, gender } = data;
  //   const user = new UserModel({firstName: firstName, age: age, email, Gpa, gender})
  // await user.save()
  const checkDuplicatedUser = await UserModel.findOne({
    email: email,
  });

  if (checkDuplicatedUser) {
    return conflictException({message:"Conflict"});
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await UserModel.insertOne(
      { fullName, age, email, Gpa, gender },
      { validateBeforeSave: true, ordered: true, session },
    );
    await session.commitTransaction();
    return user;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

export const findUser = async (data) => {
  const user = await UserModel.findById(data);
  return user;
};

export const findAll = async () => {
  const users = await UserModel.find({}).populate([
    {
      path: "product",
    },
  ]);
  return users;
};

export const updateUser = async (id, data) => {
  const { DOB, gender, wishlist } = data;
  const user = await UserModel.updateOne(
    {
      _id: id,
    },
    {
      $set: { DOB, gender },
      $addToSet: { wishlist: wishlist },
      $inc: { __v: 1 },
    },
    {
      runValidators: true,
    },
  );

  if (user.matchedCount === 0) {
    throw new Error(`Couldn't Update This User`, { cause: { status: 404 } });
  }

  if (user.modifiedCount === 0) {
    throw new Error("No changes applied", { cause: { status: 400 } });
  }

  return user;
};

export const deleteProfile = async (id) => {
  const user = await UserModel.findByIdAndDelete(id);
  if (!user) {
    throw new Error(`Couldn't Delete This Profile`, { cause: { status: 400 } });
  }
  return user;
};
