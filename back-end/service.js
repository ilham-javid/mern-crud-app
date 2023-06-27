const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

PORT = 8080;
DB_URL =
  "mongodb+srv://admin:admin@merncrud.vvw3uq5.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.listen(PORT, () => {
  console.log("Server runs in port", PORT);
});

app.use(cors());
app.use(routes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });
