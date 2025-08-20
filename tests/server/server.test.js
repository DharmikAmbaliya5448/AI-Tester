// AI-GENERATED TESTS START
const { app, resetDb, setDb, getDb } = require("../../server/server");
const request = require("supertest");

describe("Server", () => {
  beforeEach(async () => {
    await resetDb();
  });

  afterAll(async () => {
    await resetDb();
  });

  test("should start the server on port 3000", () => {
    const server = app.listen(3000);
    expect(server.address().port).toBe(3000);
    server.close();
  });


  describe("GET /api", () => {
    it("should return 200 OK", async () => {
      const response = await request(app).get("/api");
      expect(response.status).toBe(200);
    });

    it("should return 404 for non existent routes", async () => {
      const response = await request(app).get("/api/nonexistent");
      expect(response.status).toBe(404);
    });
  });


  describe("Database functions", () => {
    it("should set and get the database", async () => {
      const db = { test: "db" };
      await setDb(db);
      expect(getDb()).toEqual(db);
    });

    it("should reset the database", async () => {
      const db = { test: "db" };
      await setDb(db);
      await resetDb();
      expect(getDb()).toEqual({});
    });
  });

  describe("JSON middleware", () => {
    it("should parse JSON correctly", async () => {
      const response = await request(app)
        .post("/api/test")
        .send({ key: "value" });
      expect(response.status).toBe(200);
    });

    it("should handle invalid JSON", async () => {
        const response = await request(app)
          .post("/api/test")
          .send("invalid json");
        expect(response.status).toBe(400);
    });

  });
});

// AI-GENERATED TESTS END