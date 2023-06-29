const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

DB_URL =
  "mongodb+srv://admin:admin@mern-todo.pjqbue1.mongodb.net/?retryWrites=true&w=majority";
PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server runs in port", PORT);
});

app.use(routes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });
