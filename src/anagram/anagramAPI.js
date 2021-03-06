var router = require("express").Router(),
  validate = require("express-validation"),
  anagramService = require("./anagramService"),
  validation = require("../validation");

function findAnagrams(req, res) {
  req.sanitizeQuery("word").trim();
  req.sanitizeQuery("word").toLowerCase();

  const word = req.query.word;
  const anagrams = anagramService.find(word);
  res.json(anagrams);
}

function compareAnagrams(req, res) {
  req.sanitizeQuery(["word1", "word2"]).trim();
  req.sanitizeQuery(["word1", "word2"]).toLowerCase();

  const { word1, word2 } = req.query;
  let isAnagram = anagramService.compare(word1, word2);
  res.send({ result: isAnagram });
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
router.get("/find", validate(validation.schemaValidation.find), findAnagrams);

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
router.get(
  "/compare",
  validate(validation.schemaValidation.compare),
  compareAnagrams
);

module.exports = router;
