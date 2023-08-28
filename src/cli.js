import readlineSync from 'readline-sync';

const greeting1 = () => {
    console.log('Welcome stranger!');
    const name = readlineSync.question('How do you call yourself? ');
    console.log(`Hi ${name}!`);
};

export default greeting1()