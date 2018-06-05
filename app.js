const express = require("express");
const app = express();

const anagramData = require("./src/model");
anagramData.processWorldList();
app.get("/ping", (req, res) => res.send("pong"));

app.get("/", (req, res) => res.send("Hello guys from SweetIQ"));

app.use(require("./src/anagram"));

app.listen(3001, () => {
  console.log("App listening on port 3001");
});
