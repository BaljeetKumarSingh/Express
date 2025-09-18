const express = require("express"); // this return a function
const path = require("path");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./assets/img.jpg"));
});

app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}`
    );
  else console.log(`error occurred, server can't start ${error}`);
});
