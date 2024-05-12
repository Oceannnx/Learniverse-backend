import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/config";
import { userModel } from "../../model/user";
import { JwtPayload } from "jsonwebtoken";
export const me = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(400).send("User is not logged in");
    const payload: JwtPayload = jwt.verify(token, jwtSecret) as JwtPayload;
    const result = await userModel.findOne(
      { _id: payload.userID },
      "displayName firstName lastName email role phone"
    );
    return res.status(200).send(result);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
