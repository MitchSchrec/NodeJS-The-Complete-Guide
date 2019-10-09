// Core Modules
const path = require('path');

// Third Party Modules
const express = require('express');

// Local Modules
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
