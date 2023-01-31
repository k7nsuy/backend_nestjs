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

export function checkThePhoneNumber(phoneNumber) {
    if(phoneNumber.length !== 10 && phoneNumber.length !== 11) {
        console.log('Error - Check the phone number');
    } else {
        return phoneNumber
    }
}

export function sendTokenToSMS(phoneNumber,myToken) {
    console.log(`transfer ${myToken} to the ${phoneNumber}`);
}