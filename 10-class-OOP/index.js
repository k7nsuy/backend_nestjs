const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth());

class Monster {
    power = 10

    constructor(newValue) {
        this.power = newValue
    }
    
    attack = () => {
        console.log('Attack!');
        console.log('My power is ' + this.power);
    }

    run = () => {
        console.log('Run!!');
    }
}

const myMonster01 = new Monster(50)
myMonster01.attack()
myMonster01.run()

const myMonster02 = new Monster(30)
myMonster02.attack()
myMonster02.run()
