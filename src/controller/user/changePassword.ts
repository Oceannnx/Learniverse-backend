import { Request, Response } from "express";
import { userModel } from "../../model/user";
import { hashPassword } from "../../utils/passwordManager";
import { passwordCheck } from "../../utils/passwordManager";
import { comparePassword } from "../../utils/passwordManager";

export const changePassword = async (req: Request, res: Response) => {
  const userID = req.params;
  const { oldPassword, newPassword } = req.body;
  const user = {
    password: await hashPassword(newPassword),
  };
  try {
    const result = await userModel.find({ _id: Object.values(userID) });
    if (result.length === 0) {
      return res.status(404).send("User not found");
    }
    const passwordMatch = await comparePassword(
      oldPassword,
      result[0].password
    );
    if (!passwordMatch) {
      return res.status(401).send("Password does not match");
    }
    if (!passwordCheck(newPassword)) {
      return res.status(400).send("Password does not meet requirements");
    }
    await userModel.findOneAndUpdate({ _id: Object.values(userID) }, user, {
      new: true,
    });
    return res.status(200).clearCookie("token").send("Password updated");
  } catch (err) {
    console.log(err);
  }
};
