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

let gameIsRunnig = false;
const getUserChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid Choice!, we choose ${DEFAULT_USER_CHOICE} for defualt`);
        return DEFAULT_USER_CHOICE;
    }
        return selection;
};
startGameBtn.addEventListener('click', function(){ // this function is known as anonymous function.
    if(gameIsRunnig){
        return;
    }
    gameIsRunnig = true;
    console.log('Game is starting...');

    const playerChoice = getUserChoice();
    console.log(playerChoice);
});