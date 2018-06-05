var router = require("express").Router();

function findAnagrams(req, res) {
  wordListAnagram[sortString(req.query.word)].filter(
    x => x != req.query.word.toLowerCase()
  );
}

function compareAnagrams(req, res) {
  const { word1, word2 } = req.query;
  let isAnagram = false;
  if (word1.lenght == word2.lenght) {
    let sort1 = [...word1.toLowerCase()].sort().join("");
    let sort2 = [...word2.toLowerCase()].sort().join("");
    isAnagram = sort1 === sort2 ? true : false;
  }
  res.json(isAnagram);
}

function sortString(str) {
  str = str.toLowerCase();
  return [...str].sort().join("");
}

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
router.get("/find", findAnagrams);

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
router.get("/compare", compareAnagrams);

module.exports = router;
