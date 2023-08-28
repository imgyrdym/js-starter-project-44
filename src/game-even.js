import readlineSync from 'readline-sync';

// создаем рандомное целое число в диапазоне до max
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// проверка на четность
const checkEveness = (randomNum) => {
    let checkedNum = 'odd'

    if (randomNum % 2 === 0) {
        checkedNum = 'even'
        return checkedNum
    }

    return checkedNum
}

// определяем рандомное число и ловим ответ пользователя
let number;
let isEven;

let name;

const greeting = () => {
    console.log('Welcome stranger!');

    name = readlineSync.question('How do you call yourself? ');

    console.log(`Hi ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const gotQuestion = () => {
    number = getRandomInt(100);
    console.log(`Question: ${number}`);
    isEven = readlineSync.question('Your answer: ');
}

// основная функция
const gameEven = () => {
    greeting();    
  
    for (let count = 0; count < 3; count += 1) {
        gotQuestion();

        if (isEven !== 'yes' && isEven !=='no') {
            return console.log ('Please, answer only "yes" or "no"');
        } else if ((isEven === 'yes' && checkEveness(number) === 'odd')) {
            console.log('"yes" is wrong answer ;(. Correct answer was "no".');
            return console.log(`Let's try again, ${name}!`);
        } else if ((isEven === 'no' && checkEveness(number) === 'even')) {
            console.log('"no" is wrong answer ;(. Correct answer was "yes".');
            return console.log(`Let's try again, ${name}!`);
        }
        
        console.log('Correct!')     
    }

    console.log(`Congratulations, ${name}!`);

};

export default gameEven()
