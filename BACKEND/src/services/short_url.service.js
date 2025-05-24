import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/short_url_db.js";

export const createShortUrlServiceWithoutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if(!shortUrl) throw new Error("shorturl is not generated")
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const createShortUrlServiceWithUser = async (url, userId) => {
  const shortUrl = generateNanoId(7);
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
