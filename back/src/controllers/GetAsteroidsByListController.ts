import { Request, Response } from "express";
import fetch from "node-fetch";

const GetAsteroidsByListController = async (req: Request, res: Response) => {
  const limit = 10; // hardcoded because i'ts already getting overcomplicated.

  const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env["INTERSTELAR_SPACE_KEY"]}&size=${limit}`;

  const asteroids: any = await fetch(url, { method: "GET" }).then((response) =>
    response.json()
  );

  const asteroidsList = asteroids.near_earth_objects;

  res.json(asteroidsList);
};

export default GetAsteroidsByListController;
