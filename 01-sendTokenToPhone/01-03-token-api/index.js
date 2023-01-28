function createTokenOfPhone(phoneNumber) {
    // 1. check the phone number counts
    if(phoneNumber.length !== 10 && phoneNumber.length !== 11) {
        console.log('Error - please input the exact phone number into the blank');
    }


    // 2. create token that is consist of 6 numbers
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

    const result = String(Math.floor(Math.random() * (10 ** tokenNumber))).padStart(tokenNumber, '0')
    console.log(result);

    // 3. transfer the tokenNumber to the user
    console.log(`transfer the ${result} to the this ${phoneNumber}` );

}

createTokenOfPhone('01012345678')