const request = require("supertest");
const app = require("../../app");

describe("Application", () => {
  it("homepage should return hello - Hello guys from SweetIQ", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello guys from SweetIQ", done);
  });
});

/**
 * Testing find anagramas endpoint by giving an word
 */
describe("GET /find", function() {
  it("respond with json containing array of anagramas", function(done) {
    request(app)
      .get("/find")
      .query({ word: "tester" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, ["retest", "setter", "street"], done);
  });
});

/**
 * Testing compare anagramas endpoint by giving 2 words {word1 and word2}
 */
describe("GET /compare", function() {
  it("respond with json containing true for {word1: 'tester' word2:'setter'}", function(done) {
    request(app)
      .get("/compare")
      .query({ word1: "tester", word2: "setter" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { result: true }, done);
  });
});
