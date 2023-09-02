import game from '../index.js';
import getRandomInt from '../random.js';

const arrOperator = ['+', '-', '*'];

// проверка результата выражения
const checkAnswer = (operator, number1, number2) => {

    if (operator === '+') {
        return (number1 + number2).toString()
    } else if (operator === '-') {
        return (number1 - number2).toString()
    } else {
        return (number1 * number2).toString()
    } 
    
};

// ПЕРЕМЕННЫЕ ДЛЯ ИНДЕКСА:
const gameRule = 'What is the result of the expression?';
// передаст в индекс следующие переменные: question - задачка; rightAnswer - ответ, который посчитала сама программа 
const gameQA = () => {
    const operator = arrOperator[(getRandomInt(3))];

    let num1;
    let num2;

    const expression = (operator) => {
        num1 = getRandomInt(100);
        num2 = getRandomInt(100);

        return `${num1} ${operator} ${num2}`;
    };

    const question = expression(operator);

    const rightAnswer = checkAnswer(operator, num1, num2);
        
    return [question, rightAnswer];
};

// ОСНОВНАЯ ФУНКЦИЯ
const gameCalc = () => (game(gameRule, gameQA));

export default gameCalc();
