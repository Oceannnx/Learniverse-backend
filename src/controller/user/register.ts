import { jwtSecret } from "../../config/config";
import { Request, Response } from "express";
import { userModel } from "../../model/user";
import jwt from "jsonwebtoken";
import { hashPassword, passwordCheck } from "../../utils/passwordManager";
import { cookieConfig } from "../../config/cookieConfig";

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, role, phone } = req.body;
    if (!passwordCheck(password))
      return res.status(400).send("Password is not strong enough");
    const user = {
      displayName: `${firstName} ${lastName}`,
      firstName,
      lastName,
      email,
      password: await hashPassword(password),
      role,
      phone,
    };
    const newUser = new userModel(user);
    const result = await userModel.findOne({ email });
    if (result) {
      return res.status(400).send("User already exists");
    }
    await newUser.save();
    const payload = jwt.sign({ userID: newUser._id }, String(jwtSecret), {
      algorithm: "HS256",
    });
    return res
      .cookie("token", payload, cookieConfig)
      .send("User registered successfully");
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
