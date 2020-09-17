var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('login', { title: 'LOGIN'});
});

router.post('/', function(req, res, next){
    console.log("@@@ = " + JSON.stringify(req.body));

    let id = req.body.user_id;
    let pwd = req.body.user_pwd;

    res.redirect('/login');
});

module.exports = router;