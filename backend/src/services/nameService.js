let names = []; // memory storage: [{ name: "John", createdAt: "2025-12-12" }]

exports.addName = (name) => {
  if (name === undefined) {
    return { success: false, message: "Name is required" };
  }

  if (typeof name !== "string") {
    return { success: false, message: "Name must be a string" };
  }

  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return { success: false, message: "Name must be a non-empty string" };
  }

  const now = new Date();

  names.unshift({
    name: trimmed,
    createdAt: now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  });

  return { success: true };
};

exports.getNames = () => {
  return names;
};

exports.clearNames = () => {
  names = [];
};
