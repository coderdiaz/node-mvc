const { getView } = require('../utils');

// / GET
const renderIndex = (req, res) => {
  return res.end(getView('index'));
}

// Router Root
const router = (req, res) => {
  if (req.method === 'GET') {
    return renderIndex(req, res);
  }
}

module.exports = router;