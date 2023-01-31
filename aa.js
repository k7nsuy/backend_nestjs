const child = {
    name: 'aa',
    age: 9,
    school: 'bb',
    money: 2000,
    hobby: 'swim'
}

const {money, hobby, ...rest} = child

console.log(rest);
