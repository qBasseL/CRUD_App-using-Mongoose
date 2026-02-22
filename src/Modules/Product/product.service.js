import { ProductModel, UserModel } from "../../DB/Models/index.js";
import { errorException } from "../../Common/utils/index.js";

export const addProduct = async (data) => {
  const { name, price, createdBy } = data;
  const user = await UserModel.findById(createdBy);
  if (!user) {
    throw new Error(`Couldn't Find That User`, { cause: { status: 404 } });
  }
  const product = await ProductModel.insertOne({
    name: name,
    price: price,
    createdBy: createdBy,
  });
  return product;
};

export const listProducts = async () => {
    // const product = await ProductModel.find().populate({path: 'createdBy', select:'firstName'})
  const product = await ProductModel.aggregate([
    {
        $lookup: {
            as: 'owner',
            from: 'Users',
            localField:'createdBy',
            foreignField:'_id'
        }
    }
  ])
  return product;
};
