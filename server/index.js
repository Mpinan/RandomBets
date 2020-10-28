const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session")
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

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

app.use(cors(corsOptions));
app.use(session({
  cookie: {
    maxAge: 2
  }
}))

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//UserRoutes

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
