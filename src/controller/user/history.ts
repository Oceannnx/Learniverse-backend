import { Request, Response } from "express";
import { historyModel } from "../../model/history";

export const history = async (req: Request, res: Response) => {
  try {
    const userID = req.params;
    const history = await historyModel
      .find({ userID: Object.values(userID) })
      .sort({ date: 1 })
      .populate("examID", "label grade subject level totalmark duration");
    return res.status(200).send(history);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
