let express = require('express');
let router = express.Router();

let cFiles = require('../controllers/fileController');
router.post('/api/files', cFiles.createFile);
router.delete('/api/files', cFiles.deleteFile);

module.exports = router;