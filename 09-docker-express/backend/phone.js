import coolsms from 'coolsms-node-sdk'
import 'dotenv/config'

export function checkThePhoneNumber(phoneNumber) {
    if(phoneNumber.length !== 10 && phoneNumber.length !== 11) {
        console.log('Error - Check the phone number');
    } else {
        return phoneNumber
    }
}

export function getToken() {
    const tokenNumber = 6
    if(tokenNumber === undefined) {
        console.log('Error');
        return
    } else if(tokenNumber <= 0) {
        console.log('Error - ');
        return
    } else if(tokenNumber > 10) {
        console.log('Error - too many counts');
    }
    // create token as randomly numbers
    const result = String(Math.floor(Math.random() * (10 ** tokenNumber))).padStart(tokenNumber, '0')
    return result
}

export async function sendTokenToSMS(phoneNumber,myToken) {
    const SMS_API_Key = process.env.SMS_API_KEY
    const SMS_API_Secret = process.env.SMS_API_SECRET
    const SMS_Sender = process.env.SMS_SENDER

    const mySMS = coolsms.default
    const message_Service = new mySMS(SMS_API_Key,SMS_API_Secret)
    const result = await message_Service.sendOne({
        to: phoneNumber,
        from: SMS_Sender,
        text: `인증하신 번호는 [${myToken}] 입니다.`
    })
    
    console.log(result);
    return result
}