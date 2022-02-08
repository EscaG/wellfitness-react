let express = require('express');
let router = express.Router();

let cProduct = require('../controllers/product-controller')
router.get('/products', cProduct.get);
router.post('/products', cProduct.post);
router.put('/products', cProduct.put);
router.delete('/products', cProduct.delete);

router.get('/products/seed', cProduct.seed);
router.get('/products/autocomplete',cProduct.autocomplete); // Для автозаполнения формы
router.get('/products/category',cProduct.category); // Для автозаполнения формы
router.get ('/product/byid/:id',cProduct.getById);

module.exports = router;