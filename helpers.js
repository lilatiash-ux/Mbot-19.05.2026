// utils/helpers.js

function isSpecial(name) {
  if (!name) return false;
  const lower = name.toLowerCase();
  return lower.includes("special") || lower.includes("limited") || lower.includes("exclusive");
}

function parsePrice(p) {
  if (!p) return null;
  return Number(String(p).replace(",", ".").replace(/[^0-9.]/g, ""));
}

function formatPrice(num) {
  if (num == null || isNaN(num)) return "—";
  return num.toFixed(2).replace(".", ",") + " zł";
}

module.exports = { isSpecial, parsePrice, formatPrice };
