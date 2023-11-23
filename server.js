const express = require("express");
const pool = require("./db");
const port = 1337;

const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello");
  res.sendStatus(200);
  console.log(`home page ${res}`);
});

app.post("/post", (req, res) => {
  const { name, location } = req.body;
  res.status(200).send({
    message: `YOUR KEYS WERE ${name} , ${location}`,
  });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
