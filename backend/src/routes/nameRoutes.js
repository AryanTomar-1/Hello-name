const express = require("express");
const { addName, getNames, clearNames } = require("../controllers/nameController");

const router = express.Router();

// POST /api/names
router.post("/add", addName);

// GET /api/names
router.get("/get", getNames);

// DELETE /api/names (bonus)
router.delete("/clear", clearNames);

module.exports = router;
