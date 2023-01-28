function getToken(number) {
    // null => force to empty in the variables
    // undefined

    if(number === undefined) {
        console.log('Error');
        return
    } else if(number <= 0) {
        console.log('Error - ');
        return
    } else if(number > 10) {
        console.log('Error - too many counts');
    }

    const result = String(Math.floor(Math.random() * (10 ** number))).padStart(number, '0')
    console.log(result);
}

getToken(3)