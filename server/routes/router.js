const express = require("express");
const router = express.Router();

// In-memory store (demo only, resets on server restart)
let items = [{ id: 1, name: "Book" }];

/**
 * GET all items
 */
router.get("/items", (req, res) => {
  res.status(200).json(items);
});

/**
 * GET single item by id
 */
router.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const item = items.find((i) => i.id === id);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json(item);
});

// GET all items
router.get("/items/:name", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Name query parameter is required" });
  }
  const item = items.find((i) => i.name === name);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json(item);
});

/**
 * POST new item
 */
router.post("/items", (req, res) => {
  const newItem = req.body;

  if (!Number.isInteger(newItem.id) || !newItem.name) {
    return res.status(400).json({ error: "Invalid item" });
  }

  if (items.some((i) => i.id === newItem.id)) {
    return res.status(400).json({ error: "Item already exists" });
  }

  items.push(newItem);
  res.status(201).json(newItem);
});

/**
 * PUT update item
 */
router.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const itemIndex = items.findIndex((i) => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const updatedItem = { ...items[itemIndex], ...req.body };
  items[itemIndex] = updatedItem;

  res.status(200).json(updatedItem);
});

/**
 * DELETE item
 */
router.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const initialLength = items.length;
  items = items.filter((i) => i.id !== id);

  if (items.length === initialLength) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json({ message: "Item deleted" });
});

/**
 * Utilities for testing
 */
function resetItems() {
  items = [{ id: 1, name: "Book" }];
}

function setItems(newItems) {
  items = [...newItems];
}

function getItems() {
  return items;
}

module.exports = { router, resetItems, setItems, getItems };
