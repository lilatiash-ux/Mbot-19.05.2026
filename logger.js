// utils/logger.js
function ts() {
  return new Date().toLocaleString("pl-PL");
}

function log(...msg) {
  console.log(`[LOG ${ts()}]`, ...msg);
}

function error(...msg) {
  console.error(`[ERR ${ts()}]`, ...msg);
}

module.exports = { log, error };
