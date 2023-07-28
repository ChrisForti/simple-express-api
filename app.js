import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1><a href='/info'>Info page</a>");
});

app.get("/info", (req, res) => {
  res.send("<h1>Infopage</h1><a href='/'>Home page</a>");
});

app.get("/message", (req, res) => {
  res.json({ message: "This is my message!" });
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
