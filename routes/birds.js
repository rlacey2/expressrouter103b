var express = require('express');

var router = express.Router();

// remember server.js consumes /api/v1/birds part of the path
// this router handles /api/v1/birds/* 

router.get('/', function(req, res) {
	res.status(200)
    res.json( { 'msg' : 'GET handler for /api/v1/birds route.' } );
});

router.post('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'POST handler for /api/v1/birds route.'});
});

router.put('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'PUT handler for /api/v1/birds route.'});
});

router.delete('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'Delete handler for /api/v1/birds route.'});
});

module.exports = router;
