import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export const userModel = mongoose.model("users", userSchema);
