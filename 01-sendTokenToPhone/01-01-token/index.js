function getToken(number) {
    const result = String(Math.floor(Math.random() * (10 ** number))).padStart(number, '0')
    console.log(result);
}

getToken(6)