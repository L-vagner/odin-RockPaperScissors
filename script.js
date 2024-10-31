console.log("Hello World!")

function throwHand(string){
    let hand;
    let handVal;
    
    if (typeof string !== typeof "a")
    {
        console.error("La valeur passé n'est pas une chaine de charatères")
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

    }

    return handVal;
}