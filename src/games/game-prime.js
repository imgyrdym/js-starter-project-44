import game from '../index.js';
import getRandomInt from '../random.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  //Проверка результата выражения
  const isPrime = (num) => {
    if (num < 2) return false;
  
    for (let i = 2; i <= num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;  
  }

const gameQA = () => {

  const num = getRandomInt(500);
  const question = num;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
    
  return [question, String(rightAnswer)];
}

// ОСНОВНАЯ ФУНКЦИЯ
const gamePrime = () => game(gameRule, gameQA);

export default gamePrime;
