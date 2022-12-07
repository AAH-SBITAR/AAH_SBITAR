const express = require("express");
const db = require("./config/db");

const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3070;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use();

app.listen(PORT, function () {
  console.log(`Server run : http://localhost:${PORT}`);
});
