const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'wrong input.';
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie';
  }

  if (userChoice === 'bomb') {
    return 'Congrats. You won the game.';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lost the game.';
    } else {
      return 'You won the game.';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lost the game.';
    } else {
      return 'You won the game.';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lost the game.';
    } else {
      return 'You won the game.';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
