import express from "express";
import { join } from "../controller/exam/join";
import { fetchData } from "../controller/exam/fetchExam";
import { submit } from "../controller/exam/submit";
import { result } from "../controller/exam/result";

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("This is the exam route");
});

router.post("/exam", join);
router.get("/exam/:examID", fetchData);
router.post("/submit", submit);
router.get("/result", result);

export default router;
