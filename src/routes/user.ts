import express from "express";
import { isLogin } from "../middleware/auth";
import { register } from "../controller/user/register";
import { login } from "../controller/user/login";
import { logout } from "../controller/user/logout";
import { me } from "../controller/user/me";

const router = express.Router();

router.post("/register", register);
router.post("/login", isLogin, login);
router.post("/logout", logout);
router.get("/me", me);

export default router;
