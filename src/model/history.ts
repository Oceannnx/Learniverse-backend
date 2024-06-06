import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  examID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exams",
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export const historyModel = mongoose.model("histories", historySchema);
