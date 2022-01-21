let express = require('express');
let router = express.Router();

let cProduct = require('../controllers/productController')
router.get('/productsfood', cProduct.get);
router.post('/productsfood', cProduct.post);
router.put('/productsfood', cProduct.put);
router.delete('/productsfood', cProduct.delete);



module.exports = router;