var express = require("express");
var app = express();

app.use(express.static("js"));
app.use(express.static("css"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/r/:subredditName", function(req, res) {
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.listen(3000, process.env.IP, function() {
  console.log("Server started. Listening on port 3000");
});
