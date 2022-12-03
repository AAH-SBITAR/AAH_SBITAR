const express = require("express");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3070;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.listen(PORT, function () {
  console.log(`Server Runs Perfectly at http://localhost:${PORT}`);
});
