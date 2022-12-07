const express = require("express");
//const db = require("./config/db");
const db = require("./models");

const Role = db.role;
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AAh_Sbitar application." });
});

db.mongoose
  .connect("mongodb://127.0.0.1:27017/sbitar1", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "Receptionist",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Receptionist' to roles collection");
      });

      new Role({
        name: "Doctor",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Doctor' to roles collection");
      });
    }
  });
}
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
app.listen(PORT, function () {
  console.log(`Server run : http://localhost:${PORT}`);
});
