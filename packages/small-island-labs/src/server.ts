import express from "express";
import dotenv from "dotenv";
import { HelloWorld } from "@small-island-projects/small-island-components/lib/esm/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(HelloWorld());
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
