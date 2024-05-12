import { Request, Response, NextFunction } from "express";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Access Denied");
    next();
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
};

export const isLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (token) return res.status(400).send("You are already logged in");
    next();
  } catch (err: any) {
    return res.status(400).send(`Error: ${err.message}`);
  }
};
