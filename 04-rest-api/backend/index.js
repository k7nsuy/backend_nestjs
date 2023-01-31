import express from 'express';
import {getToken, checkThePhoneNumber, sendTokenToSMS} from './phone.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'


const app = express()
const port = 3000


// epxress 프레임워크는 기본적으로 json 데이터를 처리하지 않기 때문에 
// 다음 기능을 사용해야 쓸 수 있다.
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/boards', (req,res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
        {number: 1,
        writer: '철수',
        title: '제목',
        contents: '내용'},
        {number: 2,
        writer: '철수2',
        title: '제목',
        contents: '내용'},
        {number: 3,
        writer: '철수3',
        title: '제목',
        contents: '내용'}
    ]

    // 2. 꺼내온 결과 응답 주기
res.send(result)
})

app.post('/boards', (req,res) => {
    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장
    console.log(req.body)

    // 2. 저장 결과 응답 주기
    res.send('게시물 등록에 성공하였습니다.')
})

app.post('/tokens/phone', (req,res) => {
    const phoneNumber = req.body.phoneNumber
    // 1. check the phone number 
    const isValid = checkThePhoneNumber(phoneNumber)
    // 2. create 6 numbers of token
    if (isValid) {
        const myToken = getToken()
    // 3. send the token number to the user's phone
        sendTokenToSMS(phoneNumber,myToken)
        res.send('인증완료')
    }
})

app.listen(3000, ()=> {
    console.log(`This server listening port ${port} ✅`);
})