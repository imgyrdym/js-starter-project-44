import game from '../index.js';
import getRandomInt from '../random.js';

// проверка результата выражения
const checkAnswer = (num1, num2) => {

    while (num1 != 0 && num2 != 0) {
        (num1 > num2) ? num1 = num1 % num2 : num2 = num2 % num1
    }
    
    return (num1 + num2).toString();
    
};

const gameRule = 'Find the greatest common divisor of given numbers.';

// передаст в индекс следующие переменные: question - задачка; rightAnswer - ответ, который посчитала сама программа 
const gameQA = () => {
    
    let num1 = getRandomInt(100);
    let num2 = getRandomInt(100);

    const question = `Question: ${num1} ${num2}`;

    const rightAnswer = checkAnswer(num1, num2);

    console.log(rightAnswer)
        
    return [question, rightAnswer];
}

// ОСНОВНАЯ ФУНКЦИЯ
const gameGCD = () => (game(gameRule, gameQA));

export default gameGCD;