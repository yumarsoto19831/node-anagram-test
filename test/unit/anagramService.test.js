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
      let result = anagramService.find(undefined);
      should.exist(result);
      result.should.be.an("array");
      result.should.have.all.members([]);
    });
    it("find should return an [] if word is set to null", () => {
      let result = anagramService.find(null);
      should.exist(result);
      result.should.be.an("array");
      console.log(result);
      result.should.have.all.members([]);
    });
    it("find should not return passed word should not be included as part of the anagram result", () => {
      let result = anagramService.find("tester");
      should.exist(result);
      result.should.be.an("array");
      console.log(result);
      result.should.have.all.members(["retest", "setter", "street"]);
    });
  });
  // Testing compare service
  // describe("find anagramas", () => {
  //   it("find should return an [] if not anagram found", () => {
  //     let result = anagramService.find("l");
  //     should.exist(result);
  //     result.should.be.an("array");
  //     result.should.have.all.members([]);
  //   });
  //   it("find should return an [] if word is not set", () => {
  //     let result = anagramService.find(undefined);
  //     should.exist(result);
  //     result.should.be.an("array");
  //     result.should.have.all.members([]);
  //   });
  //   it("find should return an [] if word is set to null", () => {
  //     let result = anagramService.find(null);
  //     should.exist(result);
  //     result.should.be.an("array");
  //     console.log(result);
  //     result.should.have.all.members([]);
  //   });
  //   it("passed word should not be included as part of the anagram result", () => {
  //     let result = anagramService.find("tester");
  //     should.exist(result);
  //     result.should.be.an("array");
  //     console.log(result);
  //     result.should.have.all.members(["retest", "setter", "street"]);
  //   });
  // });
});
