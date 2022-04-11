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
        return;
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

const getWiner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>{
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
    
    let message = `you choose ${playerChoice || DEFAULT_USER_CHOICE}, and computer choose ${computerChoice} ,`;
    if( winner === RESULT_DRAW){
        message =  message + `so the result is draw`;
    }else if (winner === RESULT_PLAYER_WIN){
        message =  message + `so the you win`;
    }else{
        message =  message + `so the computer win`;
    }
    
    alert(message);
    gameIsRunnig = false;
});






// not related to game.

// rest parameters.

const sumUp = (...numbers) => {
let sum = 0;
for (const num of numbers){
    sum += num;
}
return sum;
}

console.log(sumUp(1,3,4,5,32,6,7,3));