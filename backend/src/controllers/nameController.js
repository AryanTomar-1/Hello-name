const nameService = require("../services/nameService");

// POST /api/names
exports.addName = (req, res) => {
  const { name } = req.body;

  const result = nameService.addName(name);

  if (!result.success) {
    return res.status(400).json(result);
  }

  return res.status(201).json({ success: true, message: "Name stored successfully" });
};

// GET /api/names
exports.getNames = (req, res) => {
  const result = nameService.getNames();
  return res.json({ success: true, names: result });
};

// DELETE /api/names
exports.clearNames = (req, res) => {
  nameService.clearNames();
  return res.json({ success: true, message: "All names cleared" });
};
