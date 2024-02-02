import readlineSync from 'readline-sync';

const greeting1 = () => {
    // console.log('Welcome stranger!');
    console.log('Welcome to the Brain Games!')
    // const name = readlineSync.question('How do you call yourself? ');
    const name = readlineSync.question(' May I have your name?');
    console.log(`Hello, ${name}!`);
};

export default greeting1()
