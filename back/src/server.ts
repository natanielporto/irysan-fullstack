import express from "express";
import routes from "./routes";
import cors from "cors";
// import fetch from "node-fetch";
import morgan from "morgan";
import helmet from "helmet";
import { errorHandler, notFound } from "./middlewares";
import dotenv from "dotenv";

const app = express();
app.use(morgan("common"));
const myLogFormat =
  ":method :url :status :response-time ms - :res[content-length]";

app.use(morgan(myLogFormat));
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(express.json());
dotenv.config();

// app.use(
//   cors({
//     origin: "www.localhost://5173",
//   })
// );

app.use(routes);

app.use(notFound);
app.use(errorHandler);

app.listen(3333, () => {
  console.log(`The application is listening @3333`);
});
