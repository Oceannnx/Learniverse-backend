import { Request, Response } from "express";
import { userModel } from "../../model/user";
import { comparePassword } from "../../utils/passwordManager";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/config";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await userModel.findOne({ email });
    if (!result) {
      return res.status(400).send("cannot find user with this email");
    }
    if (!(await comparePassword(password, result.password))) {
      return res.status(400).send("Email or password is incorrect");
    }
    const payload = jwt.sign({ userID: result._id }, String(jwtSecret), {
      algorithm: "HS256",
    });
    const cookieAge = 1000 * 60 * 60 * 24 * 3; // 3 days
    return res
      .cookie("token", payload, { maxAge: cookieAge })
      .send("User logged in successfully");
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
