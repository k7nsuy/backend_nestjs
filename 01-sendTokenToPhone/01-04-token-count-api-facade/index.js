import {getToken, checkThePhoneNumber, sendTokenToSMS} from './phone.js'

function createTokenOfPhone(phoneNumber) {
    // 1. check the phone number 
    const isValid = checkThePhoneNumber(phoneNumber)
    // 2. create 6 numbers of token
    if (isValid) {
        const myToken = getToken()
    // 3. send the token number to the user's phone
        sendTokenToSMS(phoneNumber,myToken)
    }
}

createTokenOfPhone('01012345678')