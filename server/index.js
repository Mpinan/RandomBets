const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const port = 3001;
const cors = require("cors"); // allows/disallows cross-site communication

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  })
);

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(helmet());
app.use(cors(corsOptions));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//UserRoutes

app.get("/users", userQueries.getUsers);

app.get("/user/:id", (req, res, next) => {
  console.log(req);
  userQueries.findUserByEmail(req.body.email).then((user) => {
    console.log(user);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
