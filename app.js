var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var get_page = require('./routes/get_page');
var post_page = require('./routes/post_page');
var login = require('./routes/login');
var users = require('./routes/users');
var result_page = require('./routes/result_page');
var introduce = require('./routes/introduce');
var board = require('./routes/board');


var app = express();


// view engine setup
/* 
●●●● path.join([...paths])
...paths <string> A sequence of path segments
Returns: <string>
param으로 주어진 string을 다 경로로 이어준다.
ex) path.join('/foo', 'bar', 'baz/asdf');
 ==> Returns: '/foo/bar/baz/asdf'
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* 
●●●● express.static(root [, option])
root안에 있는 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일들을 제공한다.
option은 넣어도 되고 안넣어도 됨(안넣으면 디폴트)
ex) app.use('/static', express.static(__dirname + '/public'));
마운트 경로도 지정할 수 있다.
*/

app.use('/', index);
app.use('/get_page', get_page);
app.use('/post_page', post_page);
app.use('/result_page', result_page);
app.use('/login', login);
app.use('/users', users);
app.use('/introduce', introduce);
app.use('/board', board);


/* 
●●●● Middleware function
클라이언트에게 응답 시 중간에 목적에 맞게 처리를 하는(거쳐가는) 함수
next()를 통해 다음 미들웨어를 호출한다.(미들웨어가 순차적으로 실행)
req나 res 값은 변경 가능하다.
클라이언트에게 응답 전송시 종료(res methods) 된다.
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
