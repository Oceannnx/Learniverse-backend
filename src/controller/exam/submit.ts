import { Request, Response } from "express";
import { historyModel } from "../../model/history";

export const submit = async (req: Request, res: Response) => {
  const { examID, userID, correctAnswer, date, score } = req.body;
  try {
    const payload = {
      examID,
      userID,
      score: score,
      total: correctAnswer.length,
      date,
    };
    const newHistory = new historyModel(payload);
    await newHistory.save();
    return res.status(200).send("Exam submitted successfully");
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
