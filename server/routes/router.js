const express = require("express");
const router = express.Router();

// In-memory store for demo
let items = [{ id: 1, name: "Book" }];

// GET all items
router.get("/items", (req, res) => {
  res.status(200).json(items);
});

// GET single item by id
router.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((i) => i.id === id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json(item);
});

// POST new item
router.post("/items", (req, res) => {
  const newItem = req.body;
  if (!newItem.id || !newItem.name) {
    return res.status(400).json({ message: "Invalid item" });
  }
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE item
router.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const initialLength = items.length;
  items = items.filter((i) => i.id !== id);

  if (items.length === initialLength) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json({ message: "Item deleted" });
});

// Utility for tests
function resetItems() {
  items = [{ id: 1, name: "Book" }];
}

module.exports = { router, resetItems };
