import shortid from "shortid";
import Url from "../Models/url.Schema.js";

export const generateShortenUrl = async (req, res) => {
  const { longUrl,urlName } = req.body;

  if (!longUrl) {
    return res.status(400).json({
      message: "Please Provide Url",
    });
  }
  if (!urlName) {
    return res.status(400).json({
      message: "Please Provide UrlName",
    });
  }
  const urlExist = await Url.findOne({longUrl:longUrl});
  if(urlExist){
    return res.status(409).json({
      message: "Url already exists"
    })
  }
  const nameExist = await Url.findOne({urlName:urlName});
  if(nameExist){
    return res.status(409).json({
      message: "Url Name already exists"
    })
  }
  try {
    const shortUrl = shortid.generate();
    Url[shortUrl] = longUrl; // receving long url from the rq.body shorten it by using shortid.generate();

    const newUrl = new Url({
      longUrl,
      shortUrl,
      urlName,
    });

    await newUrl.save();
    res.status(201).json({
      message: "Url shortened",
      longUrl,
      shortUrl,
      urlName
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error in Shortening Url",
    });
  }
};

export const getUrlAll = async (req, res) => {
  try {
    const data = await Url.find();
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};

export const getShortUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const urlData = await Url.findOne({ shortUrl: shortUrl });
    if (!urlData) {
      return res.status(400).json({ error: "URL not Found" });
    }
    res.redirect(301,urlData.longUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
