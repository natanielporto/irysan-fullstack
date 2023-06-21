import { Request, Response } from "express";
import fetch from "node-fetch";

const GetImageOfTheDay = async (req: Request, res: Response) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env["INTERSTELAR_SPACE_KEY"]}`;

  const response = await fetch(url, { method: "GET" });
  const imageOfTheDay = await response.json();

  res.json(imageOfTheDay);
};

export default GetImageOfTheDay;
