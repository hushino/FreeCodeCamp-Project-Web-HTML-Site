'use strict';
const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');
const log = console.log;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index.ejs");
});

const port = app.get('port') || 9000;
app.listen(port, () => log(('Server is listening music on port:'),(`${port} ??`)));

