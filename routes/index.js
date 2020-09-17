var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/left-sidebar', function(req, res, next) {
  res.render('index/left-sidebar', { title: 'left-sidebar' });
});
router.get('/right-sidebar', function(req, res, next) {
  res.render('index/right-sidebar', { title: 'right-sidebar' });
});
router.get('/no-sidebar', function(req, res, next) {
  res.render('index/no-sidebar', { title: 'no-sidebar' });
});


module.exports = router;
