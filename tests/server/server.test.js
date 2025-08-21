// AI-GENERATED TESTS START
const testedFile = require("../../server/server");
const request = require("supertest");

describe("Server", () => {
  afterAll(() => {
    testedFile.server.close();
  });

  test("Server starts on port 3000 or specified PORT", () => {
    expect(testedFile.server).toBeDefined();
  });


  describe("Express App", () => {
    test("App uses express.json()", () => {
      expect(testedFile.app._router.stack.some(s => s.handle.name === 'json')).toBe(true);
    });

    test("App uses /api router", () => {
      expect(testedFile.app._router.stack.some(s => s.route.path === '/api')).toBe(true);
    });

    test("GET /api returns 404", async () => {
      const response = await request(testedFile.app).get("/api");
      expect(response.status).toBe(404);
    });
  });
});

// AI-GENERATED TESTS END