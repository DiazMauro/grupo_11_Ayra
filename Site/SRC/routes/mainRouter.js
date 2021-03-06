const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/home', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/products', mainController.products);
router.get('/shoppingCart', mainController.shoppingCart);

module.exports = router;