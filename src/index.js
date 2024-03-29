import readlineSync from 'readline-sync';

const game = (gameRule, gameQA) => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(`${gameRule}`);

    for (let count = 0; count < 3; count += 1) {
        const [question, rightAnswer] = gameQA();

        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Your answer: ');

        if (playerAnswer !== rightAnswer) {
            console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
            return console.log(`Let's try again, ${name}!`);
        }
        
        console.log('Correct!')     
    }

    console.log(`Congratulations, ${name}!`);
}

export default game;
