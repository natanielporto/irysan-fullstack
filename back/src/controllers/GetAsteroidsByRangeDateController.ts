import { Request, Response } from "express";
import fetch from "node-fetch";

const GetAsteroidsByRangeDateController = async (
  req: Request,
  res: Response
) => {
  const { startDate, endDate } = req.params;

  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env["INTERSTELAR_SPACE_KEY"]}`;

  const asteroidsInDateRange: any = await fetch(url, { method: "GET" }).then(
    (response) => response.json()
  );

  res.json(asteroidsInDateRange);
};

export default GetAsteroidsByRangeDateController;
