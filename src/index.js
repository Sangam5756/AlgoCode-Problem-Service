/**
 * Sets up an Express server with specified configurations and routes.
 * @requires express - The Express framework module.
 * @requires PORT - The port number from the server configuration file.
 * @requires apiRouter - The router containing API routes.
 * @returns None
 */

const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const dbconnect = require("./config/db.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Problem Service is running fine!" });
});

app.use("/api", apiRouter);








app.use(errorHandler);

app.listen(PORT, async() => {

  console.log(`server is running on port ${PORT}`);
  await dbconnect();
});
