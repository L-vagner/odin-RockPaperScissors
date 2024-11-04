console.log("Hello \nUse the playGame() function in the console to play\nrock, paper scissors")

function getHumanChoice(){
    let hand = prompt("Make a choice for rock, paper, scissors", "");
    
    if (typeof hand !== typeof "a")
    {
        console.error("The value is not a string")
        return false;
    }
    hand = hand.toLowerCase()

    return hand;
    }


function getComputerChoice() {
    let random = Math.ceil(Math.random() * 3)
    switch (random){
        case 1:
            return "rock"

        case 2:
            return "paper"

        case 3:
            return "scissors"
    }
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        if (!humanChoice) return "Please give either rock, paper or scissors to the playRound() function"
    
        if ( humanChoice == computerChoice){
            return humanChoice + " VS " + computerChoice + " A tie!"
        }
        switch (humanChoice){
            case "rock":
                if (computerChoice == "scissors"){
                    humanScore++;
                    return humanChoice + " VS " + computerChoice + " You win!"
                    
                }
                computerScore++;
                return humanChoice + " VS " + computerChoice + " You lose!"
            
            case "paper":
                if (computerChoice == "rock"){
                    humanScore++;
                    return humanChoice + " VS " + computerChoice + " You win!"
                }
                computerScore++;
                return humanChoice + " VS " + computerChoice + " You lose!"
            
            case "scissors":
                if (computerChoice == "paper"){
                    humanScore++;
                    return humanChoice + " VS " + computerChoice + " You win!"
                }
                computerScore++;
                return humanChoice + " VS " + computerChoice + " You lose!"
        }
        return "The value you passed was incorrect"
    }

    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    
    console.log("Player score: " + humanScore + "\nComputer score: " + computerScore)
    
    if (humanScore > computerScore) console.log("You win")
    
    else if (humanScore == computerScore) console.log("Tie")
    
    else console.log("You lose")
}