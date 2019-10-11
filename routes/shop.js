// Core Modules
const path = require('path');

// Third Party Modules
const express = require('express');

// Local Modules
const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
	console.log('Shop JS', adminData.products);
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
