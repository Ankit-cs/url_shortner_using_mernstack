import express from "express";
const app = express();
import { nanoid } from "nanoid";
const PORT = 3000;
import dotenv from "dotenv";
dotenv.config("./.env");
import cabinate from "./src/config/db.config.js";
import urlSchema from "./src/models/url.model.js";
import shortUrl from "./src/routes/shortUrl.route.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api", (req, res) => {
//   res.send(nanoid(7));
// });

app.use("/api", shortUrl);
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const url = await urlSchema.findOne({ short_url: id });
  if (url) {
    res.redirect(url.full_url);
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(PORT, () => {
  cabinate();
  console.log(`Server is running on http://localhost:${PORT}`);
});
