import readlineSync from 'readline-sync';

const greeting1 = () => {
    // console.log('Welcome stranger!');
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('How do you call yourself? ');
    console.log(`Hi ${name}!`);
};

export default greeting1()
