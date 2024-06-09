import express from "express";

import { isLogin } from "../middleware/auth";
import { register } from "../controller/user/register";
import { login } from "../controller/user/login";
import { logout } from "../controller/user/logout";
import { me } from "../controller/user/me";
import { history } from "../controller/user/history";
import { createExam } from "../controller/user/createExam";
import { myExam } from "../controller/user/myExam";
import { profileEdit } from "../controller/user/profileEdit";
import { myProfile } from "../controller/user/myProfile";
import { changePassword } from "../controller/user/changePassword";

const router = express.Router();

router.post("/register", register);
router.post("/login", isLogin, login);
router.post("/logout", logout);
router.get("/me", me);

router.put("/edit/:userID", profileEdit);
router.put("/changePassword/:userID", changePassword);
router.get("/:userID", myProfile);

router.get("/history/:userID", history);
router.get("/myExam/:userID", myExam);
router.post("/createExam", createExam);

export default router;
