function computerPlay(){
    let number = Math.floor(Math.random()*3);
    
     switch(number){
        case 0:
            return('Rock')
            break;
            case 1:
                return('Paper')
                break;
                case 2:
                    return('Scissors')
                    break;
    }
}

function playRound (playerSelection= prompt('Rock, paper or scissors?'), computerSelection= computerPlay()){
    console.log(`Computer selected: ${computerSelection}`);
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
        console.log('Draw. No one gets a point.');
    }else if((playerSelection.toUpperCase()==='ROCK'&&computerSelection.toUpperCase()==='SCISSORS')||
    (playerSelection.toUpperCase()==='PAPER'&&computerSelection.toUpperCase()==='ROCK')||
    (playerSelection.toUpperCase()==='SCISSORS'&&computerSelection.toUpperCase()==='PAPER')){
        console.log('You win! ' +playerSelection.toLowerCase() +' beats ' +computerSelection.toLowerCase() +'!');
        return (playerPoints+=1);
    }else if((computerSelection.toUpperCase()==='ROCK'&&playerSelection.toUpperCase()==='SCISSORS')||
    (computerSelection.toUpperCase()==='PAPER'&&playerSelection.toUpperCase()==='ROCK')||
    (computerSelection.toUpperCase()==='SCISSORS'&&playerSelection.toUpperCase()==='PAPER')){
        console.log('You lose! ' +computerSelection.toLowerCase() +' beats ' +playerSelection.toLowerCase() +'!');
        return (cpuPoints+=1);
    }
}
let playerPoints =0;
let cpuPoints =0;
function game(){
    for(let i = 0; i < 5; i++){
     playRound()
    }
}
game();
if(playerPoints>cpuPoints){
    console.log('You win ' +playerPoints +' to ' +cpuPoints +'.')
}else if(playerPoints<cpuPoints){
    console.log('You lose ' +playerPoints + ' to ' +cpuPoints +'.')
}
//console.log(playerPoints);
//console.log(cpuPoints);
