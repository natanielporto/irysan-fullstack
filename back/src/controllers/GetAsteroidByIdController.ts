import { Request, Response } from "express";
import fetch from "node-fetch";

const GetAsteroidByIdController = async (req: Request, res: Response) => {
  const { asteroidId } = req.params;

  const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${process.env["INTERSTELAR_SPACE_KEY"]}`;

  const asteroid: any = await fetch(url, { method: "GET" }).then((response) =>
    response.json()
  );

  res.json(asteroid);
};

export default GetAsteroidByIdController;
