var should = require("chai").should();
var anagramService = require("../../src/anagram/anagramService");

describe("AnagramService Tests", () => {
  describe("find anagramas", () => {
    it("find should return an []", () => {
      let result = anagramService.find("l");
      should.exist(result);
      result.should.be.an('array');
    });
  });
});
