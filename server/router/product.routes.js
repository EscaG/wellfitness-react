let express = require('express');
let router = express.Router();

let cProduct = require('../controllers/product-controller')
router.get('/products', cProduct.get);
router.post('/products', cProduct.post);
router.put('/products', cProduct.put);
router.delete('/products', cProduct.delete);

router.get('/seed', cProduct.seed);



module.exports = router;