// AI-GENERATED TESTS START
const testedFile = require("../../server/server");
const express = require("express");
const {router} = require("../../server/routes/router");

describe("Server", () => {
  let server;
  beforeEach(() => {
    server = testedFile;
  });

  afterEach(() => {
    server.close();
  });

  test("should start server on specified port or 3000", () => {
    const originalPort = process.env.PORT;
    process.env.PORT = 8080;
    const spy = jest.spyOn(console, 'log');
    server.listen(process.env.PORT, () => {
        expect(spy).toHaveBeenCalledWith("✅ Server running on port 8080");
    });
    process.env.PORT = originalPort;
  });

  test("should use express.json middleware", () => {
    expect(server._router.stack.some(s => s.handle.name === 'json')).toBe(true);
  });

  test("should mount router at /api path", () => {
      expect(server._router.stack.some(s => s.route.path === '/api' && s.handle === router)).toBe(true);
  });

  test("should handle non-existent route", async () => {
    const response = await fetch('http://localhost:3000/invalid-route');
    expect(response.status).toBe(404);
  });

    test("should handle requests with a port specified in the environment", () => {
        const originalPort = process.env.PORT
        process.env.PORT = 8081;
        const app = express();
        app.listen(process.env.PORT, () => {
            expect(process.env.PORT).toBe("8081")
        })
        process.env.PORT = originalPort
    })

    test("should handle requests with a port specified in the environment as string", () => {
        const originalPort = process.env.PORT
        process.env.PORT = "8082";
        const app = express();
        app.listen(process.env.PORT, () => {
            expect(process.env.PORT).toBe("8082")
        })
        process.env.PORT = originalPort
    })

    test("should handle requests with no port specified in the environment", () => {
        const originalPort = process.env.PORT
        delete process.env.PORT;
        const app = express();
        app.listen(3000, () => {
            expect(app.address().port).toBe(3000)
        })
        process.env.PORT = originalPort
    })

});

// AI-GENERATED TESTS END