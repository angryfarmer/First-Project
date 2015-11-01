var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Easy' });
});

router.get('/a', function(req, res) {
  res.send('no no no');
});

router.get('/:text', function(req, res) {
  res.send(req.params.text);
});



module.exports = router;
