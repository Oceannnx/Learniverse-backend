import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  label: {
    type: "String",
  },
  grade: {
    type: "String",
  },
  subject: {
    type: "String",
  },
  level: {
    type: "String",
  },
  totalmark: {
    type: "String",
  },
  duration: {
    type: "String",
  },
  createBy: {
    type: "String",
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  content: {
    type: ["Mixed"],
  },
});

export const examModel = mongoose.model("exams", examSchema);
