
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

        function playRound(humanChoice) {
            //let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Rock") {
                update.textContent = "It's a tie!";
                div.appendChild(update);
            }
            if(humanChoice === "Rock" && computerChoice === "Scissor") {
                update.textContent = "You won! Rock beats Scissor.";
                div.appendChild(update);
                return true;
            }
            if(humanChoice === "Rock" && computerChoice === "Paper") {
                update.textContent = "You lost! Paper beats rock.";
                div.appendChild(update);
                return false;
            }
            if (humanChoice === "Scissor" && computerChoice === "Rock") {
                console.log("You lost! Rock beats Scissor.");
                update.textContent = "You lost! Rock beats Scissor.";
                div.appendChild(update);
                return false;
            }
            if(humanChoice === "Scissor" && computerChoice === "Scissor") {
                update.textContent = "It's a tie!";
                div.appendChild(update);
            }
            if(humanChoice === "Scissor" && computerChoice === "Paper") {
                update.textContent = "You won! Scissor beats Paper.";
                div.appendChild(update);
                return true;
            }
            if (humanChoice === "Paper" && computerChoice === "Rock") {
                update.textContent = "You won! Paper beats Rock.";
                div.appendChild(update);
                return true;
            }
            if(humanChoice === "Paper" && computerChoice === "Scissor") {
                update.textContent = "You lost! Scissor beats Paper.";
                div.appendChild(update);
                return false;
            }
            if(humanChoice === "Paper" && computerChoice === "Paper") {
                update.textContent = "It's a tie!";
                div.appendChild(update);
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

            
            
            let result = playRound();
            if(result) {
                humanScore = humanScore + 1;
            }
            else if (result === false)  {
                computerScore = computerScore + 1;
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

        /* Dom UI for Rock paper scissor
        Create 3 buttons for rock,paper, and scissor that is for
        choosing the human choice.
        Add an event listener to each button to call the playRound function
        with the selected choice
        create a div to display the results and score
        announce the winner after human or computer reaches 5 points
        */
       const rockButton = document.getElementById("rock");
       const paperButton = document.getElementById("paper");
       const scissorButton = document.getElementById("scissor");
       const div = document.querySelector("div");
       const update = document.createElement("p");

       let humanScore = 0;
       let computerScore = 0;

       rockButton.addEventListener("click", function() {
        let result = playRound("Rock"); 
        if(result) {
            humanScore++;
            console.log("Human Score: " + humanScore);
            
         }
         else if (result === false) {
            computerScore++;
            console.log("Computer Score: " + computerScore);
         }
         if(humanScore === 5 || computerScore === 5) {
            printWinner();
         }
        });
       paperButton.addEventListener("click",function() { 
        let result = playRound("Paper"); 
        if(result) {
            humanScore++;
            console.log("Human Score: " + humanScore);
         }
         else if(result === false) {
            computerScore++;
            console.log("Computer Score: " + computerScore);
         }
         if(humanScore === 5 || computerScore === 5) {
            printWinner();
         }
        });
       scissorButton.addEventListener("click", function() { 
        let result = playRound("Scissor");
        if(result) {
            humanScore++;
            console.log("Human Score: " + humanScore);
         }
         else if(result === false) {
            computerScore++;
            console.log("Computer Score: " + computerScore);
         }
         if(humanScore === 5 || computerScore === 5) {
            printWinner();
         }
        });

        function printWinner() {
            if (humanScore > computerScore) {
                update.textContent = "You won! Your score: " + humanScore + ". Computer Score: " + computerScore;
            }
            else if(humanScore < computerScore) {
                update.textContent = "You lost! Computer score: " + computerScore + ". Human Score: " + humanScore;
            }
            div.appendChild(update);

            humanScore = 0;
            computerScore = 0;

            
        }
       