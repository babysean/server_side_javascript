/* main application */

var express = require('express')
var app = express()

// public 이라는 디렉토리에 있는 정적인 파일 제공
app.use(express.static('public'));

// 사용자가 /로 접속했을 때 실행될 함수
app.get('/', (req, res) => {
    res.send('Hello home page');
});

// 사용자가 /dynamic으로 접속했을때 실행될 함수, 동적파일
app.get('/dynamic', (req, res) => {
    let lis = ''
    let time = Date()

    for(let i=0 ; i<5 ; i++){
        lis += '<li>coding</li>'
    }

    let output = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Static HTML</title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
        </html>`

    res.send(output)
})

// 사용자가 /route로 접속했을 때 실행될 함수
// public 이라는 정적 파일 디렉토리를 선언하였기 때문에 /route.png 형식으로 접근 가능
app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/route.png"/>')
})

// 사용자가 /login 으로 접속했을 때 실행될 함수
app.get('/login', (req, res) => {
    res.send('<h1>Login please</h1>')
})

// 서비스 포트 설정, 3000
app.listen(3000, () => {
    console.log('Connected 3000 port!')
});