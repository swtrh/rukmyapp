var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Greetings, welcome to Express', heading: 'hello' });
});

module.exports = router;
