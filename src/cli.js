import readlineSync from 'readline-sync';

function printWelcomeMessage() {
    console.log('Welcome to the Brain Games!');
}

function greetUser() {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}

export function run() {
    printWelcomeMessage();
    greetUser();
}
