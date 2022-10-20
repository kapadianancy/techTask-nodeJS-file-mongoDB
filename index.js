const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;
const routes = require("./routes");
require("./config/db.config");

app.use(routes);

app.use("/*", (req, res) => {
  res.status(404).send({ error: "Url Not Found" });
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
