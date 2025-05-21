import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/url.model.js";

export const createShortUrlService = async (url) => {
  const shortUrl = generateNanoId(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });

  await newUrl.save();
  return shortUrl;
};
