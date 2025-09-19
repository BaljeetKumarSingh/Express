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

// path parameters

app.get("/:username/:id", (req, res) => {
  console.log(req.params); // { username: 'apple', id: '123' }
  let { username, id } = req.params;
  res.send(`<h1>Welcome to the page of @${username}!</h1>`);
});

// query String
// url: http://localhost:8080/search?q=apple&color=green
app.get("/search", (req, res) => {
  console.log(req.query); // { q: 'apple', color: 'green' }
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing Searched!</h1>");
  } else {
    res.send(`<h1>search result for query: ${q}</h1>`);
  }
});
