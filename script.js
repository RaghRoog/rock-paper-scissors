let playerPoints = 0;
let cpuPoints = 0;
let playerPointsDisplay = document.querySelector('.playerPointsDisplay');
let cpuPointsDisplay = document.querySelector('.cpuPointsDisplay');
let result = document.querySelector('.result');
let computerSelectedDisplayer = document.querySelector('.computer-selected')
let roundResult = document.querySelector('.round-result');
let newGameBtn = document.querySelector('.new-game')
newGameBtn.style.display = 'none'
let endOfGame = false;

playerPointsDisplay.textContent = playerPoints;
cpuPointsDisplay.textContent = cpuPoints;

function computerPlay(){
    let number = Math.floor(Math.random()*3);
     switch(number){
        case 0:
            return('ROCK')
            break;
        case 1:
            return('PAPER')
            break;
        case 2:
            return('SCISSORS')
            break;
    }
}

let computerSelection = computerPlay()

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

function playerPlayRock(){
    playerPlay('ROCK')
}
function playerPlayPaper(){
    playerPlay('PAPER')
}
function playerPlayScissors(){
    playerPlay('SCISSORS')
}

function addListeners(){
    if(endOfGame == false){
        rock.addEventListener('click', playerPlayRock);
        paper.addEventListener('click', playerPlayPaper);
        scissors.addEventListener('click', playerPlayScissors);
    }
    
}
addListeners()

function playerPlay(playerSelection){
    if(computerSelection === playerSelection){
        roundResult.textContent = 'Draw, no one gets a point.';
    }else if((computerSelection === 'SCISSORS' && playerSelection === 'ROCK') || 
            (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') ||
            (computerSelection === 'ROCK' && playerSelection === 'PAPER')){
        roundResult.textContent = 'You win that round.';
        playerPoints += 1
    }else{
        roundResult.textContent = 'You lose that round.';
        cpuPoints += 1
     }
    if((playerPoints === 5) || (cpuPoints === 5)){
        gameSummary();
        cpuPointsDisplay.textContent = cpuPoints;
        playerPointsDisplay.textContent = playerPoints;
    }
    computerSelectedDisplayer.textContent = 'Computer selected: ' + computerSelection;
    cpuPointsDisplay.textContent = cpuPoints;
    playerPointsDisplay.textContent = playerPoints;
    computerSelection = computerPlay()
}

function newGame(){
    newGameBtn.style.display = 'none'
    playerPoints = 0
    cpuPoints = 0
    endOfGame = false
    result.innerHTML = ''
    cpuPointsDisplay.innerHTML = '0'
    playerPointsDisplay.innerHTML = '0'
    roundResult.innerHTML = ''
    computerSelectedDisplayer.innerHTML = ''
    addListeners()
}

function gameSummary(){
    if(playerPoints > cpuPoints){
        result.textContent = ('You win ' + playerPoints + ' to ' + cpuPoints + '.')
    }else{
        result.textContent = ('You lost ' + playerPoints + ' to ' + cpuPoints + '.')
    }
    endOfGame = true;
    rock.removeEventListener('click', playerPlayRock)
    paper.removeEventListener('click', playerPlayPaper)
    scissors.removeEventListener('click', playerPlayScissors)
    newGameBtn.style.display = 'block'
    newGameBtn.addEventListener('click', newGame)
}


