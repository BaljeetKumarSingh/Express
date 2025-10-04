const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json"); // requiring a local file
  const data = instaData[username]; // this data stores only username related data only
  data
    ? res.render("instagram.ejs", { data })
    : res.render("error.ejs", { username });
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(port, (e) => {
  console.log(`Listening on port ${port}`);
});

app.get("/diceroll", (req, res) => {
  let diceroll = Math.floor(Math.random() * 6 + 1); // this will provide random value b/w 1 to 6
  res.render("diceroll.ejs", { diceroll }); // {diceroll} -> {diceroll: diceroll}, we can also change the key name
});
