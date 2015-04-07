var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment 2 - Photographer Directory for Barrie & Area' });
});

module.exports = router;
