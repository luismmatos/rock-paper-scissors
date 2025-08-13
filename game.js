function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    const choice = prompt("Choose: rock, paper or scissors");
    return choice;
};


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
        return "Draw!!"
    } else if (
        (human === "rock" && computerChoice === "scissors") ||
        (human === "paper" && computerChoice === "rock") ||
        (human === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You Win!! ${human} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You Lose!! ${computerChoice} beats ${human}`;
    }
};



const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


console.log("The player chose: ", humanChoice);
console.log("The computer chose: ", computerChoice);
console.log(playRound(humanChoice, computerChoice));
console.log(`Score: Humano ${humanScore} - ${computerScore} Computador`);