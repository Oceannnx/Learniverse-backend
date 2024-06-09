import { Request, Response } from "express";
import { userModel } from "../../model/user";

export const profileEdit = async (req: Request, res: Response) => {
  const userID = req.params;
  const { firstName, lastName, displayName, email, password, role, phone } =
    req.body;
  const user = {
    displayName,
    firstName,
    lastName,
    email,
    password,
    role,
    phone,
  };
  const result = await userModel.findOneAndUpdate(
    { _id: Object.values(userID) },
    user,
    { new: true }
  );
  return res.status(200).send(user);
};
