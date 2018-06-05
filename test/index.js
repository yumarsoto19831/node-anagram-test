const assert = require("chai").should();
const request = require("supertest");
const app = require("../app");

describe("Application", () => {
  it("app homepage should return hello", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello guys from SweetIQ", done);
  });
});
