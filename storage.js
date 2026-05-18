// utils/storage.js
const fs = require("fs");

function loadJSON(path, fallback = {}) {
  try {
    if (!fs.existsSync(path)) return fallback;
    const raw = fs.readFileSync(path, "utf8");
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveJSON(path, data) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("saveJSON error:", e);
  }
}

module.exports = { loadJSON, saveJSON };
