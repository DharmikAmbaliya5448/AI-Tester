// AI-GENERATED TESTS START
const { router, resetItems } = require("../../../server/routes/router");
const request = require("supertest");
const express = require("express");
const app = express();
app.use(express.json());
app.use(router);


describe("GET /items", () => {
  beforeEach(() => resetItems());
  it("should return all items", async () => {
    const res = await request(app).get("/items");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: "Book" }]);
  });
});

describe("GET /items/:id", () => {
  beforeEach(() => resetItems());
  it("should return a single item by id", async () => {
    const res = await request(app).get("/items/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Book" });
  });
  it("should return 404 if item not found", async () => {
    const res = await request(app).get("/items/2");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });
  it("should handle non-numeric ID", async () => {
    const res = await request(app).get("/items/abc");
    expect(res.status).toBe(404);
  });

});

describe("POST /items", () => {
  beforeEach(() => resetItems());
  it("should create a new item", async () => {
    const newItem = { id: 2, name: "Pen" };
    const res = await request(app).post("/items").send(newItem);
    expect(res.status).toBe(201);
    expect(res.body).toEqual(newItem);
  });
  it("should return 400 if item is invalid", async () => {
    const newItem = { name: "Pen" };
    const res = await request(app).post("/items").send(newItem);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ message: "Invalid item" });
  });
    it("should return 400 if item is invalid", async () => {
    const newItem = { id:2 };
    const res = await request(app).post("/items").send(newItem);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ message: "Invalid item" });
  });
});

describe("DELETE /items/:id", () => {
  beforeEach(() => resetItems());
  it("should delete an item", async () => {
    const res = await request(app).delete("/items/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Item deleted" });
  });
  it("should return 404 if item not found", async () => {
    const res = await request(app).delete("/items/2");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });
  it("should handle non-numeric ID", async () => {
    const res = await request(app).delete("/items/abc");
    expect(res.status).toBe(404);
  });
});

// AI-GENERATED TESTS END