const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");
const authMiddleware = require("./middleware/authmiddleware");

require("./models/db");

app.set("view engine", "ejs");

app.use(express.json());

app.use(cors()); // allow access from all domain

// to be encoded into the URL-encoded format, allowing for
// a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", authMiddleware.authJWT); // Auth with JWT
app.use("/api/v1", router); // like a prefix of the path

// Summary of API Endpoints
app.get("/", (req, res, next) => {
  res.content_type = "text/plain";
  res.render("index");
});

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
