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
