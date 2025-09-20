const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

//telling Express to use EJS as the view engine.
// view engine -> is a special setting in Express that tells it which template engine to use.
// ejs -> let you write HTML mixed with JS
app.set("view engine", "ejs"); // this is aka templeting

// if we try to run our server from parent folder of cwd it will throw an error : Failed to lookup view "home.ejs" in views directory "D:\Dev\Backend\views"
// b/c express try for look for views in dir "D:\Dev\Backend\views"
// to overcome this error we explicitly (hardcoded) define the path of our views dir.

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(port, (e) => {
  console.log(`Listening on port ${port}`);
});
