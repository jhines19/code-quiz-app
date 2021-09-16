var questionsEl = document.querySelector(".questions");
var buttonEl = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");


//click start and the timer starts. 

buttonEl.addEventListener("click", function() {
    startTimer()
    showQuestions()

})


//countdowntimer
var secondsLeft = 10;
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
  }
 


//1 random question shows up and 4 options in random order
//one big object with a question and 5 answers
var quizContent = {
    question1: ["how?"],
    answers1: ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5"],
};

function showQuestions{

}





