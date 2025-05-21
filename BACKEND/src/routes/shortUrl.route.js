import express from "express";
const router = express.Router();
import { createShortUrl } from "../controller/shortUrl.controller.js";
router.post("/create", createShortUrl);
export default router;
