import { Request, Response } from "express";
import fetch from "node-fetch";

const GetAsteroidsSortedByNameController = async (
  req: Request,
  res: Response
) => {
  const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env["INTERSTELAR_SPACE_KEY"]}`;

  const asteroids: any = await fetch(url, { method: "GET" }).then((response) =>
    response.json()
  );

  const asteroidsByName = asteroids.near_earth_objects;

  const sortedAsteroids = asteroidsByName.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  res.json(sortedAsteroids);
};

export default GetAsteroidsSortedByNameController;
