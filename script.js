console.log("Hello World!")

function throwHand(string){
    let hand;
    let handVal;
    
    if (typeof string !== typeof "a")
    {
        console.error("The value is not a string")
        return false;
    }
    hand = string.toLowerCase()

    switch (hand){

        case "r":
        case "rock":
            handVal = 1;
            break;

        case "p":
        case "paper":
            handVal = 2;
            break;
        
        case "s":
        case "scissors":
            handVal = 3;
            break;

        default:
            console.log("incorrect value")
            return false;
    }

    return handVal;
}

function chooseHand() {
    return Math.ceil(Math.random() * 3)
}

function makeHand(number){
    switch (number){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
    
}

function play(choice){
    let playerChoice = throwHand(choice)
    let computerChoice = chooseHand()
    if (!playerChoice) return "Please give either (r)ock, (p)aper or (s)cissors to the play() function"
    let playerHand;
    let computerHand;


    if ( playerChoice == computerChoice){
        return playerChoice + " VS " + computerChoice + " A tie!"
    }
}