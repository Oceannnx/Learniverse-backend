import { Request, Response } from "express";
import { examModel } from "../../model/exam";

export const fetchExamlist = async (req: Request, res: Response) => {
  try {
    const result = await examModel.find();
    return res.status(200).send(result);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
