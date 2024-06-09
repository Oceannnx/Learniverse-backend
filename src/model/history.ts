import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  examID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exams",
    required: true,
  },
  score: {
    type: Number,
  },
  timeLeft: {
    type: Number,
  },
  date: {
    type: Date,
  },
  total: {
    type: Number,
  },
});

export const historyModel = mongoose.model("histories", historySchema);
