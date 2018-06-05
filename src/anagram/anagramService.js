const helper = require("../helpers");
const anagramData = require("../model");
const data = anagramData.data;

const anagramServie = {
  find: function(word) {
    word = word.toLowerCase();
    let anagrams = data[helper.sortString(word)].filter(x => x != word);
    return anagrams;
  },
  compare: function(word1, word2) {
    let isAnagram = false;
    if (word1.lenght == word2.lenght) {
      let sort1 = helper.sortString(word1);
      let sort2 = helper.sortString(word2);
      isAnagram = sort1 === sort2 ? true : false;
    }
    return isAnagram;
  }
};

module.exports = anagramServie;
