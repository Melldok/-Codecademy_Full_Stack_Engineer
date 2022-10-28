let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let random = Math.floor(Math.random() * 10)
  return random;
};

const compareGuesses = (human, computer, target) => {

    const arr = [human, computer]
    const goal = target
    const closest = arr.reduce((prev, curr) => {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    
});
    console.log('closest number is: ' + closest)
    console.log(arr)

    
    if(closest === human){
        return 'Human wins!'
    }
    else if(closest === computer){
        return 'Computer wins!'
    }
    else{
        return 'Human wins!'
    }
    
};

const updateScore = winner => {
    if(winner === 'human'){
        humanScore++;
    }
    else if(winner === 'computer'){
        computerScore++;
    }
};


const advanceRound = () => {
    currentRoundNumber++;
}

