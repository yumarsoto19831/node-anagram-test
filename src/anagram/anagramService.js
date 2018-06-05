const AnagramServie = {
  find: function(word) {
    word = word.toLowerCase();
    let anagrams = wordListAnagram[sortString(word)].filter(x => x != word);
    return anagrams;
  },
  compare: function(word1, word2) {
    let isAnagram = false;
    if (word1.lenght == word2.lenght) {
      let sort1 = [...word1.toLowerCase()].sort().join("");
      let sort2 = [...word2.toLowerCase()].sort().join("");
      isAnagram = sort1 === sort2 ? true : false;
    }
    return isAnagram;
  }
};

function sortString(str) {
  str = str.toLowerCase();
  return [...str].sort().join("");
}

module.exports = AnagramServie;
