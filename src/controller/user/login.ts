import { Request, Response } from "express";
import { userModel } from "../../model/user";
import { comparePassword } from "../../utils/passwordManager";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/config";
import { cookieConfig } from "../../config/cookieConfig";

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
    return res
      .cookie("token", payload, cookieConfig)
      .send("User logged in successfully");
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
