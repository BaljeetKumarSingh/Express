const express = require("express"); // this return a function
const app = express();

const port = 8080;

app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}`
    );
  else console.log(`error occurred, server can't start ${error}`);
});

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/search", (req, res) => {
  res.send("you contacted search path");
});

app.get("/about", (req, res) => {
  res.send("you contacted about path");
});

app.get("/home", (req, res) => {
  res.send("you contacted home path");
});

// here we are creating post type response
app.post("/", (req, res) => {
  res.send("this is root post response!");
});

// custome response for paths other than the sepcified path
app.use((req, res) => {
  res.status(404).send("this path does not exist!");
});
