const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marco = "http://localhost:3000/marco";

describe("routes : static", () => {

  describe("GET /", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /marco", () => {
    it("should return status code 200 & 'polo' in the body response", (done) => {
      request.get(base + "marco", (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe("polo");
        done();
      });
    });
  });

});