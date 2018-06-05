var should = require("chai").should();
var anagramService = require("../../src/anagram/anagramService");

describe("AnagramService Tests", () => {
  describe("find anagramas", () => {
    it("find should return an [] if not anagram found", () => {
      let result = anagramService.find("l");
      should.exist(result);
      result.should.be.an("array");
    });
    it("find should return an [] if word is not set", () => {
      let result = anagramService.find(undefined);
      should.exist(result);
      result.should.be.an("array");
    });
    it("find should return an [] if word is set to null", () => {
      let result = anagramService.find(null);
      should.exist(result);
      result.should.be.an("array");
    });
  });
});
