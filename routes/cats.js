var express = require('express');

var router = express.Router();

// remember server.js consumes /api/v1/cats part of the path
// this router handles /api/v1/cats/* 

router.get('/', function(req, res) {
	res.status(200)
    res.json( { 'msg' : 'GET handler for /api/v1/cats route.' } );
});

router.post('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'POST handler for /api/v1/cats route.'});
});

router.put('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'PUT handler for /api/v1/cats route.'});
});

router.delete('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'Delete handler for /api/v1/cats route.'});
});

module.exports = router;
