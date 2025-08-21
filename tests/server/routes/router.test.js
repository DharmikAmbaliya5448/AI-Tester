// AI-GENERATED TESTS START
const testedFile = require("../../../server/routes/router");

describe("router", () => {
  beforeEach(() => {
    testedFile.resetItems();
  });

  describe("GET /items", () => {
    test("should return all items", () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: 1, name: "Book" }]);
    });
  });

  describe("GET /items/:id", () => {
    test("should return a single item", () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/1", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: "Book" });
    });
    test("should return 404 if item not found", () => {
      const req = { params: { id: 2 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/2", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Item not found" });
    });
  });

  describe("POST /items", () => {
    test("should create a new item", () => {
      const req = { body: { id: 2, name: "Pencil" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "POST" }, req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 2, name: "Pencil" });
    });
    test("should return 400 if item is invalid", () => {
      const req = { body: { name: "Pencil" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "POST" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Invalid item" });
    });
  });

  describe("DELETE /items/:id", () => {
    test("should delete an item", () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/1", method: "DELETE" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Item deleted" });
    });
    test("should return 404 if item not found", () => {
      const req = { params: { id: 2 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/2", method: "DELETE" }, req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Item not found" });
    });
  });

  test("resetItems should reset items array", () => {
    testedFile.items.push({id:2, name: "test"});
    testedFile.resetItems();
    expect(testedFile.items).toEqual([{ id: 1, name: "Book" }]);
  })
});

// AI-GENERATED TESTS END