const helper = require("../helpers");
const anagramData = require("../model");
const data = anagramData.data;

const anagramService = {
  find: function(word) {
    let anagrams = [];
    if (word && word.length > 1) {
      word = word.toLowerCase();
      anagrams = data[helper.sortString(word)] || [];
      anagrams = anagrams.filter(x => x != word);
    }
    return anagrams;
  },
  compare: function(word1, word2) {
    let isAnagram = false;
    if (word1 && word2 && word1.lenght == word2.lenght) {
      let sort1 = helper.sortString(word1);
      let sort2 = helper.sortString(word2);
      isAnagram = sort1 === sort2 ? true : false;
    }
    return isAnagram;
  }
};

module.exports = anagramService;
