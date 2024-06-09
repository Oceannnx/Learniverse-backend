import { Request, Response } from "express";
import { examModel } from "../../model/exam";

export const myExam = async (req: Request, res: Response) => {
  const userID = req.params;
  const result = await examModel.find({ userID: Object.values(userID) });
  return res.status(200).send(result);
};
