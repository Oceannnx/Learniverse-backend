import express from "express";
import { isLogin } from "../middleware/auth";
import { register } from "../controller/user/register";
import { login } from "../controller/user/login";
import { logout } from "../controller/user/logout";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isLogin, logout);

export default router;
