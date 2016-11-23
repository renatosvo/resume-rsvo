var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    var texts = require('./ptBR.json');
  res.render('index', texts);
});


router.get('/en', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var texts = require('./enUS.json');
    res.render('index', texts);
});

module.exports = router;
