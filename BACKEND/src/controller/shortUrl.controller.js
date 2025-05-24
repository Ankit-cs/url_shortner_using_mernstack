import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url_db.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlServiceWithoutUser(url);
  res.send(`${process.env.APP_URL}/${shortUrl}`);
};

export const redirectFromShort = async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (url) {
    res.redirect(url.full_url);
  } else {
    res.status(404).send("URL not found");
  }
};
