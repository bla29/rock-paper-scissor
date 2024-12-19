
        //getComputerChoice() function
        //Create variable rock for storing string "Rock"
        //Create variable paper for storing string "Paper"
        //Create variable scissor for storing string "Scissor"
        //if 0<random number<=0.33 then print Rock
        //if 0.33<random number<=0.66 then print paper
        //if random number > 0.66 then print scissor
        function getComputerChoice() {
            let rock = "Rock";
            let paper = "Paper";
            let scissor = "Scissor";
            let randomNumber = Math.random();
            if(randomNumber > 0 && randomNumber <= 0.33) {
                return rock;
            }
            if(randomNumber > 0.33 && randomNumber <= 0.66) {
                return paper;
            }
            if(randomNumber > 0.66) {
                return scissor;
            }
        }

        //getHumanChoice() function
        //Prompt user for input and store it into variable input
        //if input = rock, then return rock
        //if input = scissor, then return scissor
        //if input = paper, then return papaer
        // else prompt the user for input and repeat cycle
        //return the input value
        function getHumanChoice() {
            let input = prompt("Please pick rock, paper, or scissor!");
            if (input === "rock" || input === "Rock") {
                return "Rock";
            }
            if (input === "scissor" || input === "Scissor") {
                return "Scissor";
            }
            if (input === "paper" || input === "Paper") {
                return "Paper";
            }
            else {
                return getHumanChoice();
            }
        }

        

        //playRound() function
        //We will compare humanChoice and computerChoice against each other
        //if humanChoice = rock and computerChoice = rock then it's a tie. No point increment
        //if humanChoice = rock and computerChoice = scissor then Human wins. HumanScore is incremented
        //if humanChoice = rock and computerChoice = paper then Computer wins. ComputerScore is incremented
        //Repeat for other two choices for humanChoice(Paper and scissor)

        function playRound() {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Rock") {
                console.log("It's a tie!");
            }
            if(humanChoice === "Rock" && computerChoice === "Scissor") {
                console.log("You won! Rock beats Scissor.");
                return true;
            }
            if(humanChoice === "Rock" && computerChoice === "Paper") {
                console.log("You lost! Paper beats rock.");
                return false;
            }
            if (humanChoice === "Scissor" && computerChoice === "Rock") {
                console.log("You lost! Rock beats Scissor.");
                return false;
            }
            if(humanChoice === "Scissor" && computerChoice === "Scissor") {
                console.log("It's a tie!");
            }
            if(humanChoice === "Scissor" && computerChoice === "Paper") {
                console.log("You won! Scissor beats Paper.");
                return true;
            }
            if (humanChoice === "Paper" && computerChoice === "Rock") {
                console.log("You won! Paper beats Rock.");
                return true;
            }
            if(humanChoice === "Paper" && computerChoice === "Scissor") {
                console.log("You lost! Scissor beats Paper.");
                return false;
            }
            if(humanChoice === "Paper" && computerChoice === "Paper") {
                console.log("It's a tie!");
            }
        }

        //playGame() function
        //Creater a counter and have it start at 0
        //While the counter is not higher than 5, play 1 round of rock-paper-scissor
        //When the counter is higher than 5, print who won and print the scores of human and computer
        function playGame() {
            //Human score variable
            let humanScore = 0;
            //Computer score variable
            let computerScore = 0;

            let counter = 0;
            while(counter < 5) {
                let result = playRound();
                if(result) {
                    humanScore = humanScore + 1;
                }
                else if (result === false)  {
                    computerScore = computerScore + 1;
                }
                counter = counter + 1;
            }
            if(humanScore > computerScore) {
                console.log("Results:");
                console.log("You have won!");
                console.log("Your score: " + humanScore);
                console.log("Computer score: " + computerScore);
            }
            if(humanScore < computerScore) {
                console.log("Results:");
                console.log("You have lost!");
                console.log("Your score: " + humanScore);
                console.log("Computer score: " + computerScore);
            }
            if(humanScore === computerScore) {
                console.log("Results:");
                console.log("It's a tie!");
                console.log("Your score: " + humanScore);
                console.log("Computer score: " + computerScore);
            }
        }
