var express = require('express');

var router = express.Router();

// remember server.js consumes /api/v1/dogs part of the path
// this router handles /api/v1/dogs/* 

router.get('/', function(req, res) {
	res.status(200)
    res.json( { 'msg' : 'GET handler for /api/v1/dogs route.' } );
});

router.post('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'POST handler for /api/v1/dogs route.'});
});

router.put('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'PUT handler for /api/v1/dogs route.'});
});

router.delete('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'Delete handler for /api/v1/dogs route.'});
});

module.exports = router;
