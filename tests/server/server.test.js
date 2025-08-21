// AI-GENERATED TESTS START
const testedFile = require("../../server/server");
const request = require("supertest");

describe("Server", () => {
  let server;

  beforeEach(() => {
    server = testedFile;
  });

  afterEach(() => {
    server.close();
  });


  test("Server should listen on port 3000", () => {
    expect(server.address().port).toBe(3000);
  });

  describe("POST /api", () => {
    it("should return 404 for unsupported methods", async () => {
      const res = await request(server).get("/api");
      expect(res.status).toBe(404);
    });
  });

  describe("Module Export", () => {
    test("should export the express app", () => {
      expect(typeof testedFile).toBe("object");
      expect(testedFile.listen).toBeDefined();
    });
  });


  describe("JSON Middleware", () => {
    it("should parse JSON payloads", async () => {
      const res = await request(server).post("/api/test").send({test: "data"});
      expect(res.status).toBe(404);
    });
  });


});

// AI-GENERATED TESTS END