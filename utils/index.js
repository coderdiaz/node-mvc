const fs = require('fs');
const path = require('path');

const getView = (page) => {
  const pathView = path.join(__dirname, `../views/${page}.html`);
  return fs.readFileSync(pathView);
}

module.exports = {
  getView,
}