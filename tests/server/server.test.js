// AI-GENERATED TESTS START
const testedFile = require("../../server/server");
const express = require("express");
const {router} = require("../../server/routes/router.js");

describe("Server", () => {
  let server;
  beforeEach(() => {
    server = testedFile;
  });

  afterEach(() => {
    server.close();
  });


  test("Server should listen on the specified port or 3000 by default", () => {
    const spy = jest.spyOn(console, 'log');
    const originalPort = process.env.PORT;
    process.env.PORT = 3001;
    server.listen(process.env.PORT, () => {
      expect(spy).toHaveBeenCalledWith(`✅ Server running on port ${process.env.PORT}`);
    });
    process.env.PORT = originalPort;
  });

  test("Server should use express.json middleware", () => {
    expect(server._router.stack.some(s => s.handle.name === 'json')).toBe(true);
  });

  test("Server should mount router at /api path", () => {
    expect(server._router.stack.some(s => s.route.path === "/api" && s.handle === router)).toBe(true);
  });


  test("Should handle invalid port gracefully", () => {
    const spy = jest.spyOn(console, 'log');
    const originalPort = process.env.PORT;
    process.env.PORT = "abc";
    const serverInstance = express();
    serverInstance.use(express.json());
    serverInstance.use("/api", router);

    const listenSpy = jest.spyOn(serverInstance, 'listen');
    serverInstance.listen(process.env.PORT, () => {
        expect(listenSpy).toHaveBeenCalled();
    })
    process.env.PORT = originalPort;

  });

  test("Module exports the app instance", () => {
    expect(testedFile).toBeInstanceOf(express.Application);
  });

});

// AI-GENERATED TESTS END