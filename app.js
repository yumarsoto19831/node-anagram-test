const fs = require("fs");
const express = require("express");
const wordListPath = require("word-list");

const app = express();
const wordList = fs.readFileSync(wordListPath, "utf8").split("\n");

const wordListAnagram = {};

function processWorldList() {
  // wordList.map(x => {
  //   let sort = sortString(x);
  //   if (wordListAnagram[sort]) wordListAnagram[sort].push(x);
  //   else wordListAnagram[sort] = Array(x);
  // });
}

app.get("/ping", (req, res) => res.send("pong"));

app.get("/", (req, res) => res.send("Hello guys from SweetIQ"));

app.use(require("./src/anagram"));

app.listen(3001, () => {
  console.log("App listening on port 3001");
  processWorldList();
});
