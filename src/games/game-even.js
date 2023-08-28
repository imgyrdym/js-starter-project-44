import game from '../index.js';

// создаем рандомное целое число в диапазоне до max
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// проверка на четность
const isEven = (num) => (num % 2 === 0)

// ПЕРЕМЕННЫЕ ДЛЯ ИНДЕКСА:
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'
// question - задачка; rightAnswer - ответ, который посчитала сама программа 
const gameQA = () => {
   const question = getRandomInt(100);
   const number = question;

   const rightAnswer = isEven(number) ? 'yes' : 'no';
   
   return [question, rightAnswer]
}

// ЩСНОВНАЯ ФУНКЦИЯ
const gameEven = () => (game(gameRule, gameQA));

export default gameEven()
