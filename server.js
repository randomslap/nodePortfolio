var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 5400;

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
	res.render("portfolio");
});

app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT);
});
