const fs = require('fs');

function readJsonFile(file) {
  return JSON.parse(fs.readFileSync(file));
}

module.exports = { readJsonFile }