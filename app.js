/* main application */

let express = require('express')
let app = express()

// 웹페이지 소스 정렬
app.locals.pretty = true;

// jade 템플릿 엔진과 express를 연결
app.set('view engine', 'jade')
// 템플릿이 있는 폴더를 설정 (Default Folder : ./views)
app.set('views', './views')

// public 이라는 디렉토리에 있는 정적인 파일 제공
app.use(express.static('public'));

// query string 사용
app.get('/topic', (req, res) => {
    let topics = [
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ]

    let output = `
        <a href='/topic?id=0'>JavaScript</a><br>
        <a href='/topic?id=1'>NodeJs</a><br>
        <a href='/topic?id=2'>Express</a><br>
        ${topics[req.query.id]}
    `

    res.send(output)
})
app.get('/param/:module_id/:topic_id', (req, res) => {
    res.json(req.params)
})

// /template 으로 접속했을 때 실행될 함수
app.get('/template', (req, res) => {
    // temp 파일을 렌터링해서 전송
    // options 로 변수 전달하여 jade 파일에서 사용
    res.render('temp', {time: Date(), _title: 'Jade'});
})

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