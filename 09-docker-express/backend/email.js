import { getToday } from "./utils.js.js";
import nodemailer from 'nodemailer'
import 'dotenv/config'


export function getWelcomeTemplate({name, age, school}) {
    const result = `
        <html>
            <body>
                <h1>Welcome to join</h1>
                <hr />
                <div>
                    <div>name: ${name}</div>
                    <div>age: ${age}</div>
                    <div>school: ${school}</div>
                    <div>createdAt: ${getToday()}</div>
                </div>
            </body>
        </html>
    `
    console.log(result);
    return result
}

export function checkEmail(email) {
    if(email === undefined || !email.includes('@')) {
        console.log('occued the error! Please input the email correctly');
        return false
    } else {
        return true
    }
}

export async function sendTemplateToEmail(email, myTemplate) {
    const EMAIL_User = process.env.EMAIL_USER
    const EMAIL_Password = process.env.EMAIL_PASSWORD
    const EMAIL_Sender = process.env.EMAIL_Sender

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_User,
            pass: EMAIL_Password
        }
    })
    
    const result = await transporter.sendMail({
        from: EMAIL_Sender,
        to: email,
        subject: 'Thank you for join us!',
        html: myTemplate
    })
    console.log(result);
}