// utils/fetcher.js
const axios = require("axios");
const { error } = require("./logger");

async function safeFetch(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await axios.get(url, { timeout: 8000 });
      return res.data;
    } catch (e) {
      error(`safeFetch error (${i + 1}/${retries}) for ${url}:`, e.message);
      await new Promise(r => setTimeout(r, 500));
    }
  }
  return null;
}

module.exports = { safeFetch };
