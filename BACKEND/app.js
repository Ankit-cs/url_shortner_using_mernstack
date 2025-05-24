import express from "express";
import dotenv from "dotenv";
import cabinate from "./src/config/db.config.js";
import shortUrlRoutes from "./src/routes/shortUrl.route.js";
import { redirectFromShort } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler)
app.use("/api", shortUrlRoutes);
app.get("/:id", redirectFromShort); 

app.listen(PORT, () => {
  cabinate();
  console.log(`Server is running on http://localhost:${PORT}`);
});
