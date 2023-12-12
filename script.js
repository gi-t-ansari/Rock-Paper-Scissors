let userWins = 0;
let botWins = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let botScore = document.querySelector("#bot-score");

const displayWinner = (userIsWinner, userChoice, botChoice) => {
    if(userIsWinner) {
        userWins++;
        userScore.innerText = userWins;
        msg.innerText = `Congrats You Won! Play Again! You chose ${userChoice} & Bot chose ${botChoice}.`;
        msg.style.backgroundColor = "#16a34a"
    } else {
        botWins++;
        botScore.innerText = botWins;
        msg.innerText = `Oops You Lost! Try Again! You chose ${userChoice} & Bot chose ${botChoice}.`;
        msg.style.backgroundColor = "#dc2626"
    }
}

const getWinner = (userChoice, botChoice) => {
    if(userChoice === botChoice) {
        msg.innerText = `Game Drawn! Play Again! You & Bot both chose ${userChoice}.`;
        msg.style.backgroundColor = "#ca8a04"
    } else {
        let userIsWinner = true;
        if(userChoice === "rock") {
            userIsWinner = botChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userIsWinner = botChoice === "scissors" ? false : true;
        } else {
            userIsWinner = botChoice === "rock" ? false : true;
        }
        displayWinner(userIsWinner, userChoice, botChoice);
    }
}

const botChoices = () => {
    let botChoice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return botChoice[random];
}

const playGame = (userChoice) => {
    let botChoice = botChoices()
    
    getWinner(userChoice, botChoice);
} 

choices.forEach((choice) => {
    let userChoice = choice.getAttribute("id")
    choice.addEventListener("click", () => {
        playGame(userChoice);
    })
})