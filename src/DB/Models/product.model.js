import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name is Required"],
    },
    price: {
      type: Number,
      required: [true, "Price is Required"],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
  },
  {
    collection: "Products",
    strict: true,
    strictQuery: true,
    optimisticConcurrency: true,
    toJSON: { virtuals: true },
    timestamps: true,
    autoIndex: true,
  },
);


export const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema)