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
}

class flyMonster extends Monster {
    constructor(www) {
        super(www)
    }
    run = () => {
        console.log('Fly!!');
    }
}

class groundMonster extends Monster {
    constructor(qqq) {
        super(qqq)
    }
    run = () => {
        console.log('Run!!');
    }
}

const myMonster01 = new flyMonster(50)
myMonster01.attack()
myMonster01.run()

const myMonster02 = new groundMonster(30)
myMonster02.attack()
myMonster02.run()
