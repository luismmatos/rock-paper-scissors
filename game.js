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

