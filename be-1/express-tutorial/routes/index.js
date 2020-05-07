var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', item: 'new World' });
});

/* GET about page */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About me', name: 'Nathan'});

});


module.exports = router;
