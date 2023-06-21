import express from "express";
import GetAsteroidsByRangeDate from "./controllers/GetAsteroidsByRangeDateController";
import GetAsteroidById from "./controllers/GetAsteroidByIdController";
import GetAsteroidsSortedByName from "./controllers/GetAsteroidsSortedByNameController";
import GetAsteroidsByList from "./controllers/GetAsteroidsByListController";
import GetImageOfTheDay from "./controllers/GetImageOfTheDayController";

const routes = express.Router();

routes.get("/asteroids/:startDate/:endDate", GetAsteroidsByRangeDate);

routes.get("/asteroids/search/:id", GetAsteroidById);

routes.get("/asteroids/list", GetAsteroidsByList);

routes.get("/asteroids/sorted", GetAsteroidsSortedByName);

routes.get("/asteroids/imageOfTheDay", GetImageOfTheDay);

export default routes;
