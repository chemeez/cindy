var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('board/board', {title: 'BOARD'});
});

// insert 페이지
router.get('/boardInsert', function(req, res, next){
    res.render('board/boardInsert', {title: 'BOARD_INSERT'});
});

// 보여주기
router.post('/', function(req, res, next) {

    var idx = req.body.idx;
    var singer = req.body.singer;
    var song = req.body.song;
    var regId = req.body.regId;
    var regdate = req.body.regdate;
    console.log(JSON.stringify(req.body)); 

    console.log("## post request"); 
    res.render('board', { title: 'BOARD', idx: idx, singer: singer, song: song, regId: regId, regdate: regdate, method: "post" });
});

// 보여주기
router.post('/', function(req, res, next) {

    var idx = req.body.idx;
    var singer = req.body.singer;
    var song = req.body.song;
    var regId = req.body.regId;
    var regdate = req.body.regdate;
    console.log(JSON.stringify(req.body)); 

    console.log("## post request"); 
    res.render('board', { title: 'BOARD', idx: idx, singer: singer, song: song, regId: regId, regdate: regdate, method: "post" });
});

module.exports = router;