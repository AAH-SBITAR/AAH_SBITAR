const express = require("express");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3070;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use("/movie", movieRoute);
app.use("/user", userRourte);

app.use(cors());

app.listen(PORT, function () {
  console.log(`Server Runs Perfectly at http://localhost:${PORT}`);
});
