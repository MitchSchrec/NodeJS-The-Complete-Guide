// Core Modules
const path = require('path');

// Third Party Modules
const express = require('express');

// Local Modules
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	products.push({title: req.body.title});
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
