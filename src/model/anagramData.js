const fs = require("fs");
const wordListPath = require("word-list");
const wordList = fs.readFileSync(wordListPath, "utf8").split("\n");
const helper = require("../helpers");

const wordListAnagram = {};
module.exports.processWorldList = async () => {
  wordList.map(x => {
    let sort = helper.sortString(x);
    if (wordListAnagram[sort]) wordListAnagram[sort].push(x);
    else wordListAnagram[sort] = Array(x);
  });
};
module.exports.data = wordListAnagram;
