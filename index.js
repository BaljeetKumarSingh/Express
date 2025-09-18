const express = require("express"); // this return a function

const app = express();

const port = 8080;

// when the index.js is running its continiously listening for the request comming on the port
// app. listen takes 2 args; 1- port address, 2- callback function
app.listen(port, (error) => {
  if (!error) console.log(`app is listening on port ${port}`);
  else console.log("Error occurred, server can't start", error);
});

// app.use()
// this takes a callback function as an argument, which takes two parameter req & res
// its basically listen and track request and call callback function.
// and in callback function, express by default create these two parameter req & res.

app.use((req, res, next) => {
  //   console.log(req); // express converts http - text based request to object
  console.log("request received!");
  const data =
    "<h1>Fruits</h1> <ul> <li>apple</li><li>banana</li><li>papaya</li></ol>";
  // this help us to send response in any form like buffer, strings, objects, tags etc.
  // res.send({ name: "Baljeet" });
  next();
});

/**
 * Buffer : res.send(Buffer.from("Baljeet"));
 * when we send a buffer as a response it downloads the buffer with data present inside it.
 */

app.get("/baljeet", (req, res) => {
  res.status(200);
  res.send({ name: "Baljeet" });
});
