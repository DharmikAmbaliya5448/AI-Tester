// AI-GENERATED TESTS START
const testedFile = require("../../server/server");
const express = require("express");
const { router } = require("../../server/routes/router");

describe("Server", () => {
  let server;
  beforeEach(() => {
    server = testedFile;
  });

  afterEach(() => {
    server.close();
  });

  test("should start server on specified port or 3000", () => {
    const port = process.env.PORT || 3000;
    expect(server.address().port).toBe(port);
  });


  test("should use express.json middleware", () => {
    expect(server._router.stack.some(layer => layer.handle.name === 'json')).toBe(true);
  });

  describe("Route Mounting", () => {
    test("should mount router at /api", () => {
      expect(server._router.stack.some(layer => layer.route.path === "/api")).toBe(true);
    });

    test("should use provided router", () => {
      expect(server._router.stack.some(layer => layer.handle === router)).toBe(true);
    })

    test("should handle requests to /api", async () => {
      const request = require('supertest')(server);
      const response = await request.get('/api');
      expect(response.statusCode).toBe(404)
    });
  });

  test("should handle errors during startup", () => {
    const mockExpress = jest.fn(() => ({
      use: jest.fn(),
      listen: jest.fn((port, cb) => {
        throw new Error("Mock server error");
        cb();
      })
    }));
    jest.mock('express', () => mockExpress);
    const server = require("../../server/server");
    expect(mockExpress).toHaveBeenCalled();
    expect(server).toBeDefined();
  })

  test("should export app", () => {
    expect(testedFile).toBeInstanceOf(express.Application);
  });
});

// AI-GENERATED TESTS END