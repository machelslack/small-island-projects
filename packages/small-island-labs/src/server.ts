import express from "express";
import { HelloWorld } from "@small-island-projects/small-island-components/lib/esm/index.js";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log(`😀`, HelloWorld);
  res.send(HelloWorld());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
