// AI-GENERATED TESTS START
const testedFile = require("../../server/server");

describe("Server", () => {
  describe("startServer", () => {
    it("should start server on default port", () => {
      const server = testedFile.startServer();
      expect(server.address().port).toBe(3000);
      server.close();
    });
    it("should start server on specified port", () => {
      const server = testedFile.startServer(3001);
      expect(server.address().port).toBe(3001);
      server.close();
    });
    it("should start server on environment port", () => {
      process.env.PORT = 3002;
      const server = testedFile.startServer();
      expect(server.address().port).toBe(3002);
      server.close();
      delete process.env.PORT;
    });
  });
  describe("app", () => {
    it("should be an express app", () => {
      expect(testedFile.app._router.stack.length).toBeGreaterThan(0);
    });
    it("should use json middleware", () => {
      expect(testedFile.app._router.stack.some(s => s.handle.name === 'json')).toBe(true);
    });
    it("should mount api router", () => {
      expect(testedFile.app._router.stack.some(s => s.route.path === '/api')).toBe(true);
    });

  });
});

// AI-GENERATED TESTS END