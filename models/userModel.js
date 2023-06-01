import mongoose from "mongoose";
import { compare, hash } from "bcryptjs";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide your name."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email."],
  },
  password: {
    type: String,
    required: [true, "Please provide your password."],
    select: false,
  },
});

//this pre middleware will only work with save and create function.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  console.log("User password has hashed...");
  this.password = await hash(this.password, 12);
  next();
});

//validating the password
userSchema.methods.comparePassword = async function (plainPassword) {
  return await compare(plainPassword, this.password);
};

export default mongoose.models?.User || mongoose.model("User", userSchema);
