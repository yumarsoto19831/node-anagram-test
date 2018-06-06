var should = require("chai").should();
var anagramService = require("../../src/anagram/anagramService");

describe("AnagramService Tests", () => {
  describe("find anagramas", () => {
    it("find should return an [] if not anagram found", () => {
      let result = anagramService.find("j");
      should.exist(result);
      result.should.be.an("array");
      result.should.have.all.members([]);
    });
    it("find should return an [] if word is not set", () => {
      let result = anagramService.find();
      should.exist(result);
      result.should.be.an("array");
      result.should.have.all.members([]);
    });
    it("find should return an [] if word is set to null", () => {
      let result = anagramService.find(null);
      should.exist(result);
      result.should.be.an("array");
      result.should.have.all.members([]);
    });
    it("find should not return passed word should not be included as part of the anagram result", () => {
      let result = anagramService.find("tester");
      should.exist(result);
      result.should.be.an("array");
      result.should.have.all.members(["retest", "setter", "street"]);
    });
  });
  // Testing compare service
  describe("compare anagramas service", () => {
    it("compare should return an false if word1 and/or word2 are not set", () => {
      let result = anagramService.compare();
      should.exist(result);
      result.should.be.false;
      result = anagramService.compare("test");
      result.should.be.false;
      result = anagramService.compare((word2 = "test"));
      result.should.be.false;
    });
    it("compare should return false if word1 and word2 have diferent lenght", () => {
      const word1 = "track",
        word2 = "arck";
      let result = anagramService.compare(word1, word2);
      should.exist(result);
      result.should.be.false;
    });
    it("compare should return true if word1 and word2 are anagram no matter Case sensitivity", () => {
      const word1 = new String("tester"),
        word2 = new String("setteR");
      let result = anagramService.compare(word1, word2);
      should.exist(result);
      result.should.be.true;
    });
  });
});
