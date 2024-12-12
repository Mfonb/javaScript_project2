//!Guess the Number Game - Project Brief
//!Introduction
//!Create a JavaScript program that simulates a Guess the Number game. The user will try to guess a randomly generated number within a 
//!specified range. The program will provide feedback after each guess and allow the user to restart the game at any time.
//!Project Requirements
//!1. Random Number Generation: Generate a random number within a given range (e.g., 1 to 100) at the start of each game.
//!2. User Input: Allow the user to input their guesses.
//!3. Feedback: Provide feedback after each guess:
//o If the guess is too high, display "Too High."
//o If the guess is too low, display "Too Low."
//o If the guess is correct, congratulate the user.
//!4. Track Guesses: Keep track of the number of guesses the user has made.
//!5. Game Restart Option: Provide a button to restart the game, resetting the random number and guess count.
//!6. Input Validation: Ensure that the user's input is a number within the specified range and provide an error message if the input is invalid.
//!Design Considerations
//• Structure your program with clear and modular functions (e.g., generating random numbers, validating input, providing feedback).
//• Use meaningful variable and function names to ensure code readability.
//• Incorporate basic styling to make the game visually appealing (optional but encouraged).
//• Ensure intuitive and user-friendly input and restart functionality

//? First, user login page leading to page 2. Username/password saved to a library.

//?Secnd, Start page
//? Third, create a prompt for user to choose number from a random number range within a specified range. Ensure item entered is a number, 
//? else return to prompt with option of same number range option to choose. Page shows number of trial. Page RESTARTS button resets no of
//? trial, and random number range. 
 
//? Check if number chosen greater, lower, or equal generated number; give necessary feedback to user as an alert. Save and increase number 
//? of guesses made by user to an array and displayed. 

//console.log(document)
//const startButton = document.getElementById("start")
//const page3Heading = document.querySelector("h3");
//const inputCommand = document.querySelector("h4"); // Use the correct variable name
//let inputSubmission = document.querySelector("dialog");
//const restartButton = document.getElementById("restart")
//const trackGames = document.querySelectorAll("p")
//const heading = document.getElementById("heading")
//const body = document.querySelector("body")
//const trialMessage = document.getElementById("trialMessage")
//let noOfTrial = document.getElementById("noOfTrial")
//const guessAlert = document.getElementById("guessAlert")
//let noOfGuesses = document.getElementById("noOfGuesses")

//page3Heading.style.backgroundColor = "pink";
//inputCommand.style.backgroundColor = "yellow"
//heading.style.backgroundColor = "green"
//body.style.backgroundColor = "yellow"

//let trials = 0;
//let correctGuesses = 0;
//noOfGuesses = 0;
//noOfTrial = 0;

//trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
//guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
 
//inputCommand.append(#prompt)
//function input() {
    //random range generation
  //  const randomRange1 = Math.floor(Math.random() * 50); //0 to range 50.
   // const randomRange2 = Math.floor(Math.random() * (100 - randomRange1 + 1)) + randomRange1; //(100 - randomRange1 + 1) from randomRange1
    //const randomRange = Math.floor(Math.random() * (randomRange2 - randomRange1 + 1)) + randomRange1; // 
    //const lowerLimit = Math.floor(Math.random() * randomRange);
    //const upperLimit = Math.floor(Math.random() * 101) + randomRange; // from range randomRange to 101
   // const question = prompt(`enter a number from ${lowerLimit} to ${upperLimit}`)

    //if (question === randomRange) {
      //  correctGuesses = correctGuesses + 1;
        //trials = trials + 1;
       // noOfGuesses = correctGuesses;
       // noOfTrial = trials;
      //  alert("you did it. see how much more you can predict the robot.")
      //  trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
       // guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
        //return input;

    //} else if (question > randomRange) {
     //   trials = trials + 1;
       // noOfTrial = trials;
       // alert(`too high. robot predicted ${randomRange}.`);
      //  trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
      //  guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
      //  return input;

    //} else if (question < randomRange) {
      //  trials = trials + 1;
       // noOfTrial = trials;
      //  alert(`too low. robot predicted ${randomRange}.`);
      //  trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
      //  guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
      //  return input;
    //} else if (question === null) {
        // User canceled the prompt
      //  alert("Input canceled. Click start to try again");
      //  return null;
    //} else if (!isNaN(question) && question <= randomRange1 && question >= randomRange2) {
     //   alert("response above or below range");
      //  return input;
    //} else {
        // Invalid input, ask again
     //   alert("invalid response");
       // return input;
   // }
//}

//function restart() {
  //  return input;
//}

//function mouseOver() {
  //  alert("restarting resets game page and current game data lost")
//}
//restartButton.addEventListener("mouseover", mouseOver)
//startButton.addEventListener("click", input);
//restartButton.addEventListener("click", restart);

console.log(document);
const startButton = document.getElementById("start");
const page3Heading = document.querySelector("h3");
const inputCommand = document.querySelector("h4");
let inputSubmission = document.querySelector("dialog");
const restartButton = document.getElementById("restart");
const trackGames = document.querySelectorAll("p");
const heading = document.getElementById("heading");
const body = document.querySelector("body");
const trialMessage = document.getElementById("trialMessage");
const noOfTrial = document.getElementById("noOfTrial");
const guessAlert = document.getElementById("guessAlert");
const noOfGuesses = document.getElementById("noOfGuesses");

inputCommand.textContent = `click the "play" button.`
page3Heading.style.backgroundColor = "pink";
inputCommand.style.backgroundColor = "yellow";
heading.style.backgroundColor = "green";
body.style.backgroundColor = "#CC9999"

let trials = 0;
let correctGuesses = 0;

trialMessage.textContent = `You have made ${trials} attempts so far.`;
guessAlert.textContent = `You've made ${correctGuesses} correct guesses so far.`;

function input() {
    // Generate random ranges
    const lowerLimit = Math.floor(Math.random() * 50); // Between 0 and 49
    const upperLimit = Math.floor(Math.random() * (100 - lowerLimit + 1)) + lowerLimit; // From lowerLimit to 100
    const randomRange = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;

    const userInput = prompt(`Enter a number between ${lowerLimit} and ${upperLimit}:`);

    if (userInput === null) {
        // User canceled the prompt
        alert("Input canceled. Click start to try again.");
        return;
    }

    const userNumber = Number(userInput); // Convert input to a number

    if (isNaN(userNumber)) {
        alert("Invalid input. Please enter a number.");
        return input(); // Ask again
    }

    trials++;
    trialMessage.textContent = `You have made ${trials} attempts so far.`;

    if (userNumber === randomRange) {
        correctGuesses++;
        guessAlert.textContent = `You've made ${correctGuesses} correct guesses so far.`;
        alert("You guessed it! Great job!");
    } else if (userNumber > randomRange) {
        alert(`Too high! The robot predicted ${randomRange}.`);
    } else if (userNumber < randomRange) {
        alert(`Too low! The robot predicted ${randomRange}.`);
    } else {
        alert("Something went wrong. Please try again.");
    }

    // Update guess information
    guessAlert.textContent = `You've made ${correctGuesses} correct guesses so far.`;
    trialMessage.textContent = `You have made ${trials} attempts so far.`;
}

function restart() {
    trials = 0;
    correctGuesses = 0;
    trialMessage.textContent = `You have made ${trials} attempts so far.`;
    guessAlert.textContent = `You've made ${correctGuesses} correct guesses so far.`;
    alert("Game has been reset. Click start to play again.");
}

// Event Listeners
startButton.addEventListener("click", input);
restartButton.addEventListener("click", restart);