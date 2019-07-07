const express = require("express");
const app = express();
const path = require("path");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5400;

const databaseURL = "portfolio";
const collections = ["projects"];

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio";

mongoose.connect(MONGODB_URI);

const db = mongojs(databaseURL, collections);

app.use(express.static(path.join(__dirname, "public")));

require("./routes/htmlRoutes")(app, path);
require("./routes/apiRoutes")(app, path, db);

app.listen(PORT, () =>
	console.log("Server listening on: http://localhost:" + PORT)
);
