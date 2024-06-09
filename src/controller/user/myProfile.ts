import { Request, Response } from "express";
import { userModel } from "../../model/user";

export const myProfile = async (req: Request, res: Response) => {
  const userID = req.params;
  const result = await userModel.find({ _id: Object.values(userID) });
  return res.status(200).send(result);
};
