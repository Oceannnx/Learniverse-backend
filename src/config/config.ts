require("dotenv").config();

export const port: number = Number(process.env.PORT || 3000);
export const mongoURL: string = String(process.env.MONGO_URL);
export const jwtSecret: string = String(process.env.JWT_SECRET);
