import express from "express";
const router=express.Router();
import{register_user,login_user} from "../controller/auth.controller.js"

router.post("/register",register_user)
router.post("/login",login_user)


export default router;