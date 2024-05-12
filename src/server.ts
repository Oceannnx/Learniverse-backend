import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { port, mongoURL } from "./config/config";

import user from "./routes/user";

const app = express();
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
