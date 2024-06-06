import { Request, Response } from "express";
import { examModel } from "../../model/exam";

export const createExam = async (req: Request, res: Response) => {
  try {
    const examPayload = req.body;
    const newExam = new examModel(examPayload);
    await newExam.save();
    return res.status(200).send(examPayload);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
