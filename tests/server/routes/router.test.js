// AI-GENERATED TESTS START
const testedFile = require("../../../server/routes/router");

describe("router", () => {
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
    test("should return 400 for invalid ID", () => {
      const req = { params: { id: "abc" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/abc", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid ID" });
    });
    test("should return 404 for non-existent item", () => {
      const req = { params: { id: 2 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/2", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Item not found" });
    });
  });

  describe("GET /items/:name", () => {
    test("should return item by name", () => {
      const req = { query: { name: "Book" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items?name=Book", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: "Book" });
    });
    test("should return 400 if name is missing", () => {
      const req = { query: {} };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Name query parameter is required" });
    });
    test("should return 404 if item not found", () => {
      const req = { query: { name: "NonExistent" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items?name=NonExistent", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Item not found" });
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
      expect(testedFile.getItems()).toEqual([{ id: 1, name: "Book" }, { id: 2, name: "Pencil" }]);
      testedFile.resetItems();
    });
    test("should return 400 for invalid item", () => {
      const req = { body: { name: "Pencil" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "POST" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid item" });
    });
    test("should return 400 if item already exists", () => {
      const req = { body: { id: 1, name: "Pencil" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "POST" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Item already exists" });
    });
  });

  describe("PUT /items/:id", () => {
    test("should update an item", () => {
      const req = { params: { id: 1 }, body: { name: "Updated Book" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/1", method: "PUT" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: "Updated Book" });
      testedFile.resetItems();
    });
    test("should return 400 for invalid ID", () => {
      const req = { params: { id: "abc" }, body: { name: "Updated Book" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/abc", method: "PUT" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid ID" });
    });
    test("should return 404 if item not found", () => {
      const req = { params: { id: 2 }, body: { name: "Updated Book" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/2", method: "PUT" }, req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Item not found" });
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
      expect(testedFile.getItems()).toEqual([]);
      testedFile.resetItems();
    });
    test("should return 400 for invalid ID", () => {
      const req = { params: { id: "abc" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/abc", method: "DELETE" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid ID" });
    });
    test("should return 404 if item not found", () => {
      const req = { params: { id: 2 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/2", method: "DELETE" }, req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Item not found" });
    });
  });

  describe("resetItems", () => {
    test("should reset items to default", () => {
      testedFile.setItems([{ id: 2, name: "test" }]);
      testedFile.resetItems();
      expect(testedFile.getItems()).toEqual([{ id: 1, name: "Book" }]);
    });
  });

  describe("setItems", () => {
    test("should set items to new array", () => {
      testedFile.setItems([{ id: 2, name: "test" }]);
      expect(testedFile.getItems()).toEqual([{ id: 2, name: "test" }]);
      testedFile.resetItems();
    });
  });

  describe("getItems", () => {
    test("should return current items", () => {
      expect(testedFile.getItems()).toEqual([{ id: 1, name: "Book" }]);
    });
  });
});

// AI-GENERATED TESTS END