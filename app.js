// Core Modules
const http = require('http');

// Third Party
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
