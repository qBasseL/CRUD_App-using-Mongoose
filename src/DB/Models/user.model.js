import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required field"],
      minLength: [2, "Name Should Contain More Than 2 Characters"],
      maxLength: [25, "Name Should Contain Less Than 25 Characters"],
      validate: {
        validator: function (value) {
          if (value === "admin" || value === "system") {
            return false;
          }
          return true;
        },
        message: function (prop) {
          return `This username is not allowed value = ${prop.value}`;
        },
      },
    },
    lastName: {
      type: String,
      required: [true, "Name is required field"],
      minLength: [2, "Name Should Contain More Than 2 Characters"],
      maxLength: [25, "Name Should Contain Less Than 25 Characters"],
      validate: {
        validator: function (value) {
          if (value === "admin" || value === "system") {
            return false;
          }
          return true;
        },
        message: function (prop) {
          return `This username is not allowed value = ${prop.value}`;
        },
      },
    },
    email: {
      type: String,
      required: [true, "Email is required field"],
      unique: [true, "You Cannot Register With The Same Email Twice"],
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female"],
        message: "Only Male or Female are allowed",
      },
      default: "male",
      required: [true, "You Must Enter Your Gender"],
      lowercase: true,
    },
    wishlist: {
      type: [String]
    },
    age: {
      type: Number,
      required: [true, "Age is required field"],
      min: [18, "You Should Be At Least 18 Years Old"],
      max: [65, "You're Older Than The Maximum Age Allowed"]
    },
  },
  {
    collection: "Users",
    strict: false,
    timestamps: true,
    autoIndex: true,
    strictQuery: true,
    optimisticConcurrency: true,
    toJSON: { virtuals: true },
    toObject: {virtuals: true},
    strictPopulate: false
  },
);

userSchema.virtual("fullName").set(function (value) {
    const [firstName, lastName] = value.split(" ");
    this.set({ firstName: firstName, lastName: lastName });
  }).get(function () {
    return this.firstName + " " + this.lastName;
  });

userSchema.virtual('product', {
  localField:'_id',
  foreignField:"createdBy",
  ref:'Product'
})

export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
