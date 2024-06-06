import { Request, Response } from "express";
import { examModel } from "../../model/exam";

export const fetchData = async (req: Request, res: Response) => {
  const examID = req.params.examID;
  try {
    const result = await examModel.findById(examID);
    return res.status(200).send(result);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
