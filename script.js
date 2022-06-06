let playerPoints =0;
let cpuPoints =0;
let playerPointsDisplay = document.querySelector('.playerPointsDisplay');
let cpuPointsDisplay = document.querySelector('.cpuPointsDisplay');
let result = document.querySelector('.result');
let computerSelected = document.querySelector('.computer-selected')
let roundResult = document.querySelector('.round-result');
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

let playRoundButton = document.querySelector('.playRoundButton');

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')


let gameEnabled= false;

rock.addEventListener('click', rockPlay);
paper.addEventListener('click', paperPlay);
scissors.addEventListener('click', scissorsPlay);

let computerSelection = computerPlay()

function rockPlay(){
    let rock = document.querySelector('.rock').disabled=true;
    let paper = document.querySelector('.paper').disabled=true;
    let scissors = document.querySelector('.scissors').disabled=true;
     if(computerSelection==='ROCK'){
         roundResult.textContent='Draw, no one gets a point.';
     }else if(computerSelection==='SCISSORS'){
        roundResult.textContent='You win that round.';
         playerPoints+=1
     }else{
        roundResult.textContent='You lose that round.';
         cpuPoints+=1
     }
     if((playerPoints===5)||(cpuPoints===5)){
        gameSummary();
        playRoundButton = document.querySelector('.playRoundButton').disabled=true;
        cpuPointsDisplay.textContent = cpuPoints;
        playerPointsDisplay.textContent = playerPoints;
    }
    computerSelected.textContent = 'Computer selected: ' +computerSelection;
}

function paperPlay(){
    let rock = document.querySelector('.rock').disabled=true;
    let paper = document.querySelector('.paper').disabled=true;
    let scissors = document.querySelector('.scissors').disabled=true;
     if(computerSelection==='PAPER'){
        roundResult.textContent='Draw, no one gets a point.';
     }else if(computerSelection==='ROCK'){
        roundResult.textContent='You win that round.';
         playerPoints+=1
     }else{
        roundResult.textContent='You lose that round.';
         cpuPoints+=1
     }
     if((playerPoints===5)||(cpuPoints===5)){
        gameSummary();
        playRoundButton = document.querySelector('.playRoundButton').disabled=true;
        cpuPointsDisplay.textContent = cpuPoints;
        playerPointsDisplay.textContent = playerPoints;
    }
    computerSelected.textContent = 'Computer selected: ' +computerSelection;
}

function scissorsPlay(){
    let rock = document.querySelector('.rock').disabled=true;
    let paper = document.querySelector('.paper').disabled=true;
    let scissors = document.querySelector('.scissors').disabled=true;
     if(computerSelection==='SCISSORS'){
        roundResult.textContent='Draw, no one gets a point.';
     }else if(computerSelection==='PAPER'){
        roundResult.textContent='You win that round.';
         playerPoints+=1
     }else{
        roundResult.textContent='You lose that round.';
         cpuPoints+=1
     }
     if((playerPoints===5)||(cpuPoints===5)){
        gameSummary();
        playRoundButton = document.querySelector('.playRoundButton').disabled=true;
        cpuPointsDisplay.textContent = cpuPoints;
        playerPointsDisplay.textContent = playerPoints;
    }
    computerSelected.textContent = 'Computer selected: ' +computerSelection;
}



function nextRound(){    
    cpuPointsDisplay.textContent = cpuPoints;
    playerPointsDisplay.textContent =playerPoints;
    let rock = document.querySelector('.rock').disabled=false;
    let paper = document.querySelector('.paper').disabled=false;
    let scissors = document.querySelector('.scissors').disabled=false;
    computerSelection=computerPlay();
}

playRoundButton.addEventListener('click', nextRound);

function gameSummary(){
    if(playerPoints>cpuPoints){
        result.textContent=('You win ' +playerPoints +' to ' +cpuPoints +'.')
    }else{
        result.textContent=('You lost ' +cpuPoints +' to ' +playerPoints +'.')
    }
}


