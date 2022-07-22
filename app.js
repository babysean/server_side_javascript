/* main application */

var express = require('express')
var app = express()

// 사용자가 /로 접속했을 때 실행될 함수
app.get('/', (req, res) => {
    res.send('Hello home page');
});

// 사용자가 /login 으로 접속했을 때 실행될 함수
app.get('/login', (req, res) => {
    res.send('<h1>Login please</h1>');
})

// 서비스 포트 설정, 3000
app.listen(3000, () => {
    console.log('Connected 3000 port!')
});