import { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(400).send("User is not logged in");
    return res
      .clearCookie("token")
      .send("User logged out successfully")
      .status(200);
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
