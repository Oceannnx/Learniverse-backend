import express from "express";
import mongoose from "mongoose";
import { port, mongoURL } from "./config/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import user from "./routes/user";
import exam from "./routes/exam";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/user", user);
app.use("/exam", exam);

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoURL, { dbName: "Learniverse" });
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Database connected successfully");
  } catch (err: any) {
    return console.log(err.message);
  }
});
app.get("/test", (req, res) => {
  return res.send("Hello world");
});
