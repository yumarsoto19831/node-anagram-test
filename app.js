const fs = require("fs");
const express = require("express");
const wordListPath = require("word-list");

const app = express();
const wordList = fs.readFileSync(wordListPath, "utf8").split("\n");

let wordListAnagram = {};

function processWorldList() {
  wordList.map(x => {
    let sort = sortString(x);
    if (wordListAnagram[sort]) wordListAnagram[sort].push(x);
    else wordListAnagram[sort] = Array(x);
  });
}

app.get("/ping", (req, res) => res.send("pong"));

app.get("/", (req, res) => res.send("Hello guys from SweetIQ"));

/**
 * @api {get} /find Find Anagrams
 * @apiName FindAnagrams
 * @apiDescription This endpoint will find all anagrams in the english dictionary based on the string sent
 * @apiGroup Anagram
 *
 * @apiParam (query) {String} word
 *
 * @apiExample {curl} Example usage:
 *     curl -X GET -H "Content-Type: application/json" -d '{"word": "test"}' http://localhost:3001/find
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *      "word1",
 *      "word2",
 *      "word3"
 *   ]
 */
app.get("/find", (req, res) => {
  res.json(
    wordListAnagram[sortString(req.query.word)].filter(
      x => x != req.query.word.toLowerCase()
    )
  );
});

/**
 * @api {get} /compare Compare Anagrams
 * @apiName CompareAnagrams
 * @apiDescription This endpoint will receive two words, and compare them to see if they are anagrams
 * @apiGroup Anagram
 *
 * @apiParam (query) {String} word1
 * @apiParam (query) {String} word2
 *
 * @apiExample {curl} Example usage:
 *     curl -X GET -H "Content-Type: application/json" -d '{"word1": "test", "word2: "tset"}' http://localhost:3001/compare
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   false
 */
app.get("/compare", (req, res) => {
  res.send(anagram(req.query.word1, req.query.word2));
});

function anagram(str1, str2) {
  let isAnagram = false;
  if (str1.lenght == str2.lenght) {
    let sort1 = [...str1.toLowerCase()].sort().join("");
    let sort2 = [...str2.toLowerCase()].sort().join("");
    isAnagram = sort1 === sort2 ? true : false;
  }
  return isAnagram;
}

function sortString(str) {
  str = str.toLowerCase();
  return [...str].sort().join("");
}

app.listen(3001, () => {
  console.log("App listening on port 3001");
  processWorldList();
});
