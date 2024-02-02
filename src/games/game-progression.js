import game from '../index.js';
import getRandomInt from '../random.js';

const gameRule = 'What number is missing in the progression?';

const gameQA = () => {
  const firstProgression = getRandomInt(20);
  const stepProgression = getRandomInt(10);
  const lengthprogression = getRandomInt(10);
  const hiddenNumberIndex = getRandomInt(0, lengthprogression - 1);
  let hiddenNumber = 0;
  const progression = [];

  for (let i = firstProgression; progression.length < lengthprogression; i += stepProgression) {
    progression.push(i);

    if (progression.length - 1 === hiddenNumberIndex) {
      hiddenNumber = i;
      progression[hiddenNumberIndex] = '..';
    }
  }

  const question = progression.join(' ');
  const rightAnswer = hiddenNumber;

  return [question, String(rightAnswer)];
}

// ОСНОВНАЯ ФУНКЦИЯ
const gameProg = () => game(gameRule, gameQA);

export default gameProg;
