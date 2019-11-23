const routerRoot = require('./controllers/index');
const routerProducts = require('./controllers/products');

// Global router
const router = (req, res) => {
  if (req.url === '/') {
    return routerRoot(req, res);
  } else if (req.url === '/products') {
    return routerProducts(req, res);
  }
};

module.exports = router;
