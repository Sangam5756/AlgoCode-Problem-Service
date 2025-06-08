const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Problem Service is running fine!" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
