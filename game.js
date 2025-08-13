function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
};

function getHumanChoice() {
    const choice = prompt("Choose: rock, paper or scissors");
    return choice;
};

function playGame() {
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

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log("Jogador escolheu:", humanChoice);
        console.log("Computador escolheu:", computerChoice);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Placar: Humano ${humanScore} - ${computerScore} Computador`);
        console.log("------------------");
    };

    console.log("Final Result:");
    if (humanScore > computerScore) {
        console.log(`Human Victory! ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer Victory! ${computerScore} - ${humanScore}`);
    } else {
        console.log(`Draw! ${humanScore} - ${computerScore}`);
    }
};

playGame();




