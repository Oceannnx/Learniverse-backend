import { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
  try {
    return res
      .clearCookie("token")
      .send("User logged out successfully")
      .status(200);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
