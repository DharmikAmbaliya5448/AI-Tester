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


  it("should start the server on port 3000", (done) => {
    server.listen(3000, () => {
      request(server)
        .get("/api")
        .expect(404)
        .end(done);
    });
  });


  it("should handle JSON requests", () => {
    const app = testedFile;
    expect(app._router.stack.some(s => s.handle.name === 'jsonParser')).toBe(true)
  });

  it("should mount the router at /api", () => {
    const app = testedFile;
    expect(app._router.stack.some(s => s.route.path === '/api')).toBe(true);
  });

  it("should return 404 for invalid routes", (done) => {
      request(testedFile)
        .get("/invalid")
        .expect(404, done);
  });

  it("should export the app object", () => {
    expect(typeof testedFile).toBe("object");
  });


});

// AI-GENERATED TESTS END