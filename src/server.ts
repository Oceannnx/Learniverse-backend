import express from "express";
import mongoose from "mongoose";
import { port, mongoURL } from "./config/config";
import cookieParser from "cookie-parser";

import user from "./routes/user";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/user", user);

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
