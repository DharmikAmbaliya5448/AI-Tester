// AI-GENERATED TESTS START
const { router, resetItems } = require("..\..\..\server\routes\router.js");
const request = require("supertest");
const express = require("express");
const app = express();
app.use(express.json());
app.use(router);


describe("GET /items", () => {
  it("should return all items", async () => {
    const res = await request(app).get("/items");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: "Book" }]);
  });
});

describe("GET /items/:id", () => {
  it("should return a single item", async () => {
    const res = await request(app).get("/items/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Book" });
  });
  it("should return 404 if item not found", async () => {
    const res = await request(app).get("/items/2");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });
});

describe("GET /items/name/:name", () => {
  it("should return an item by name", async () => {
    const res = await request(app).get("/items/name/Book");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Book" });
  });
  it("should return 404 if item not found", async () => {
    const res = await request(app).get("/items/name/Laptop");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });
});


describe("POST /items", () => {
  it("should create a new item", async () => {
    const newItem = { id: 2, name: "Laptop" };
    const res = await request(app).post("/items").send(newItem);
    expect(res.status).toBe(201);
    expect(res.body).toEqual(newItem);
    resetItems();
  });
  it("should return 400 if invalid item", async () => {
    const newItem = { name: "Laptop" };
    const res = await request(app).post("/items").send(newItem);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ message: "Invalid item" });
  });
});

describe("DELETE /items/:id", () => {
  it("should delete an item", async () => {
    const res = await request(app).delete("/items/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Item deleted" });
    resetItems();
  });
  it("should return 404 if item not found", async () => {
    const res = await request(app).delete("/items/2");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
    resetItems();
  });
});

describe("resetItems", () => {
  it("should reset items to initial state", () => {
    const newItem = { id: 2, name: "Laptop" };
    items.push(newItem);
    resetItems();
    expect(items).toEqual([{ id: 1, name: "Book" }]);
  });
});

describe("module exports", () => {
  it("should export router and resetItems", () => {
    expect(module.router).toBeDefined();
    expect(module.resetItems).toBeDefined();
  })
})

// AI-GENERATED TESTS END