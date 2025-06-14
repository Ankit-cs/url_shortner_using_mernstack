import express from "express";
import dotenv from "dotenv";
import cabinate from "./src/config/db.config.js";
import shortUrlRoutes from "./src/routes/shortUrl.route.js";
import auth_routes from "./src/routes/auth.routes.js";

import { redirectFromShort } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";


dotenv.config();
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler)
app.use("/api/auth",auth_routes)
// app.use("/api", shortUrlRoutes);
// app.get("/:id", redirectFromShort); 

app.listen(PORT, () => {
  cabinate();
  console.log(`Server is running on http://localhost:${PORT}`);
});
