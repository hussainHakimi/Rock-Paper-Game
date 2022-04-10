const startGameBtn = document.getElementById('start-game-btn');

// const start = function(){
// 	console.log('Game is starting...');
// }
// const person = {
//     greet: function greet(){
//         console.log('Hello there.')
//     }
// }
// person.greet();

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WIN = 'COMOUTER WIN';
const RESULT_PLAYER_WIN = 'PLAYER WIN';

let gameIsRunnig = false;
const getUserChoice = () => {  // using => arrow function.
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid Choice!, we choose ${DEFAULT_USER_CHOICE} for defualt`);
        return DEFAULT_USER_CHOICE;
    }
        return selection;
};

const getComputerChoice = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.34){
        return ROCK;
    }else if(randomNumber < 0.67 && randomNumber > 0.34){
        return PAPER;
    }else if(randomNumber > 0.67 && randomNumber < 1){
        return SCISSORS;
    }
}

const getWiner = (cChoice, pChoice) =>{
    return cChoice === pChoice ? RESULT_DRAW
        :   cChoice === ROCK && pChoice === PAPER ||
            cChoice === PAPER  && pChoice === SCISSORS ||
            cChoice === SCISSORS && pChoice === ROCK
        ? RESULT_PLAYER_WIN 
        : RESULT_COMPUTER_WIN;



    // if(cChoice === pChoice){
    //     return RESULT_DRAW;
    // }else if (
    //     cChoice === ROCK && pChoice === PAPER ||
    //     cChoice === PAPER  && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    //     ){
    //     return RESULT_PLAYER_WIN;
    // }else{
    //     return RESULT_COMPUTER_WIN;
    // }
}

startGameBtn.addEventListener('click', () => { // this function is known as anonymous function.
    if(gameIsRunnig){
        return;
    }
    gameIsRunnig = true;
    console.log('Game is starting...');

    const playerChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const winner = getWiner(computerChoice, playerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(winner);
});