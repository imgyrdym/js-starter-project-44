import readlineSync from 'readline-sync';

// создаем рандомное целое число в диапазоне до max. Отдельная функция, выносим
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let name;

const greeting = () => {
    console.log('Welcome stranger!');

    name = readlineSync.question('How do you call yourself? ');

    console.log(`Hi ${name}!`);
    console.log('What is the result of the expression?');
}

// основная функция
const gameCalc = () => {

    greeting();

    // создаем рандомного оператора
    const arrOperator = ['+', '-', '*']
    const operator = arrOperator[(getRandomInt(3))]

    let num1;
    let num2;
    let expression;
    let isEqual;
    let result;

    for (let count = 0; count < 3; count += 1) {
        
        // создаем рандомное выражение
        const makeExpression = (operator) => {
            num1 = getRandomInt(100)
            num2 = getRandomInt(100)

            return `${num1} ${operator} ${num2}`
        }

        // выводим это выражение в консоль и ждем ответа (тоже общая фунция как будто, да)
        const gotQuestion = () => {
            expression = makeExpression(operator)
            console.log(`Question: ${expression}`);
            isEqual = readlineSync.question('Your answer: ');
        }

        gotQuestion();

        // делаем проверку
        const countResult = (expression) => {

            // выражение сейчас - строка. делаем из него массив, чтобы выделить его части
            const arrExpression = expression.split(' ')

            // превращаем цифры-строки в норм цифры 
            let op = arrExpression[1];
            let num1 = Number(arrExpression[0]);
            let num2 = Number(arrExpression[2]);

            if (op === '+') {
                result = num1 + num2
                return result 
            } else if (op === '-') {
                result = num1 - num2
                return result
            } else {
                result = num1 * num2
                return result
            } 
        }

        countResult(expression)

        if (result !== Number(isEqual)) {
            console.log(`'${isEqual}' is wrong answer ;(. Correct answer was '${result}'`)        
            return console.log(`Let's try again, '${name}!`)        
        } else {
            console.log('Correct!') 
        }
    }

    console.log(`Congratulations, ${name}!`);

}

export default gameCalc()
