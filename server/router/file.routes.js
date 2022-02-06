let express = require('express');
let router = express.Router();

let cFiles = require('../controllers/fileController');
router.post('/files', cFiles.createFile);
router.delete('/files', cFiles.deleteFile);

module.exports = router;