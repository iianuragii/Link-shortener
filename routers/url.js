const express = require('express');
const { shortUrl } = require('../controllers/url');

const router = express.Router();
 
router.post('/', shortUrl);

module.exports = router;