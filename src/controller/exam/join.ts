import { Request, Response } from "express";
import { examModel } from "../../model/exam";

export const join = async (req: Request, res: Response) => {
  const { grade, subject, level } = req.body;
  try {
    const result = await examModel
      .findOne({ grade, subject, level })
      .select("_id");
    if (!result) {
      return res.status(400).send("Exam not found");
    }
    return res.status(200).send(result);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
