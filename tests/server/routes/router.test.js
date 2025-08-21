// AI-GENERATED TESTS START
const testedFile = require("../../../server/routes/router");

describe("router", () => {
  describe("GET /items", () => {
    it("should return all items", () => {
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
    it("should return a single item", () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/1", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: "Book" });
    });
    it("should return 400 for invalid ID", () => {
      const req = { params: { id: "abc" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/abc", method: "GET" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid ID" });
    });
    it("should return 404 for non-existent item", () => {
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

  describe("POST /items", () => {
    it("should create a new item", () => {
      const req = { body: { id: 2, name: "Pencil" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "POST" }, req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 2, name: "Pencil" });
      expect(testedFile.getItems()).toHaveLength(2);
    });
    it("should return 400 for invalid item", () => {
      const req = { body: { name: "Pencil" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items", method: "POST" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid item" });
    });
    it("should return 400 for existing item", () => {
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
    it("should update an item", () => {
      const req = { params: { id: 1 }, body: { name: "Updated Book" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/1", method: "PUT" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: "Updated Book" });
    });
    it("should return 400 for invalid ID", () => {
      const req = { params: { id: "abc" }, body: { name: "Updated Book" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/abc", method: "PUT" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid ID" });
    });
    it("should return 404 for non-existent item", () => {
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
    it("should delete an item", () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/1", method: "DELETE" }, req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Item deleted" });
      expect(testedFile.getItems()).toHaveLength(0);
    });
    it("should return 400 for invalid ID", () => {
      const req = { params: { id: "abc" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      testedFile.router.handle({ url: "/items/abc", method: "DELETE" }, req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid ID" });
    });
    it("should return 404 for non-existent item", () => {
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
    it("should reset items to default", () => {
      testedFile.setItems([{ id: 2, name: "test" }]);
      testedFile.resetItems();
      expect(testedFile.getItems()).toEqual([{ id: 1, name: "Book" }]);
    });
  });

  describe("setItems", () => {
    it("should set items to new array", () => {
      testedFile.setItems([{ id: 2, name: "test" }]);
      expect(testedFile.getItems()).toEqual([{ id: 2, name: "test" }]);
    });
  });

  describe("getItems", () => {
    it("should return current items", () => {
      expect(testedFile.getItems()).toEqual([{ id: 1, name: "Book" }]);
    });
  });
});

// AI-GENERATED TESTS END