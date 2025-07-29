import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import AuthRoles from "../utils/AuthRoles.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [25, "Name should not exceeed 25 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "password should contain atleast 8 characters"],
      //* secured
      select: false,
    },
    phone: {
      type: String,
      required: [true, "Phone no: is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
      trim: true,
      maxLength: [150, "Address should not exceeed 150 characters"],
    },
    role: {
      type: String,
      enum: Object.values.AuthRoles,
      default: "USER",
    },
  },
  { timestamps: true }
);

//! mongoose hook
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
});

//! schema methods
userSchema.methods = {
  //* compare password
  comparePassword: async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  },
};

export default mongoose.model("User", userSchema);
