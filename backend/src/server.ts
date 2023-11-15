import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import { dbConnect } from "./config/database.config";
dbConnect();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use("/api/foods", foodRouter);
const port = 3000;

app.listen(port, () => {
  console.log("server started on http://localhost:" + port);
});
