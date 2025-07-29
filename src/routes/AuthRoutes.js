import express from "express";
import { logIn, logOut, signUp } from "../controllers/AuthControllers.js";

const router = express.Router();

//! sign-up || method:post
router.post("/signup", signUp);

//! log-in || method:post
router.post("/login", logIn);

//! log-out || method:post
router.post("/logout", logOut);

export default router;
