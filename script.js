var content = [
    {
        question: 'Why was Javascript originally created?',
        options: ['To let computers talk to one another', 'To make "web pages come alive"', 'For engineers to work on Operating systems', 'To do similar things to Java'],
        correct: 'To make "web pages come alive"'
    },
    {
        question: 'What are programs in Javascript called?',
        options: ['template', 'integers', 'scripts', 'operations'],
        correct: 'scripts'
    },
    {
        question: 'When first created, what was JavaScripts original name?',
        options: ['LiveScript', 'TypeScript', 'BrowserEnginer', 'CustomType'],
        correct: 'TypeScript'
    },
    {
        question: 'What are some things that JavaScript can do in the browser?',
        options: ['change other webpages html permanently', 'develop new backend stack tech, start a secure connection between servers', 'update OS', 'webpage manipulation, interaction with the user, and the webserver'],
        correct: 'webpage manipulation, interaction with the user, and the webserver'
    },
    {
        question: 'What is an example of some of JavaScripts safety restrictions/limitations in the browser?',
        options: ['It has no direct access to OS functions', 'sign in password capabilities', 'two-factor authentication', 'auth0 integration capabilities'],
        correct: 'It has no direct access to OS functions'
    },
]

var startButtonEl = document.querySelector("#start_button")
startButtonEl.textContent = "Start the Quiz"

var questionTextEl = document.querySelector("#question_text")
console.log(questionTextEl)

var button0El = document.querySelector("#button0")
var button1El = document.querySelector("#button1")
var button2El = document.querySelector("#button2")
var button3El = document.querySelector("#button3")

               //-------------------part 1 finished^-------------------//

               //-------------------part 2 start-------------------//
               //trying to add clicking event listeners to each buttonEl
               //timer system
               //point system
               //


//timer system
// function: start button function
// every time start button is clicked start timer
var timeLeft = 45;
var keepScore = 0;


function startQuiz() {

    startButtonEl.addEventListener('click', function () {
        var timerEl = document.querySelector('#timer');

        function setTimer() {
            var timerCountdown = setInterval(function () {
                timeLeft--;
                timerEl.textContent = timeLeft + " seconds left!";

                if (timeLeft === 0) {
                    clearInterval(timerCountdown);
                    sendMessage();
                }
            }, 1000);
        }
        function sendMessage() {
            timerEl.textContent = "Game Over!"
        }
        setTimer()

        //on start, display first question and options from content
        questionTextEl.textContent = content[0].question
        button0El.textContent = content[0].options[0]
        button1El.textContent = content[0].options[1]
        button2El.textContent = content[0].options[2]
        button3El.textContent = content[0].options[3]

        document.querySelectorAll('.selector').forEach(item => {
            item.addEventListener('click', event => {
                if (event.target.textContent==content[0].correct) {
                    alert("Correct! You get +10 points 🙂")
                    keepScore += 10
                    
                } else {
                    alert("Wrong answer! Lose 5 seconds on the clock 😬")
                    timeLeft -= 5
                    
                }
            })
        })
    })
}

startQuiz()


//point system




//go through every index of the array and:

//display the question and the options
//when an option is clicked, compare it to the answer property
//do quiz conditional logic










//   button1El.addEventListener('click', function (){
//     questionTextEl.textContent = content[2].question
//     button0El.textContent = content[2].options[0]
//     button1El.textContent = content[2].options[1]
//     button2El.textContent = content[2].options[2]
//     button3El.textContent = content[2].options[3]
//     })
  

            // button0El.addEventListener("click", function(){
            //     questionTextEl++
            //     button0El++
            //     button1El++
            //     button2El++
            //     button3El++
            // })

            // button1El.addEventListener("click", function(){
            //     questionTextEl++
            //     button0El++
            //     button1El++
            //     button2El++
            //     button3El++
            // })
            // button2El.addEventListener("click", function(){
            //     questionTextEl++
            //     button0El++
            //     button1El++
            //     button2El++
            //     button3El++
            // })
            // button3El.addEventListener("click", function(){
            //     questionTextEl++
            //     button0El++
            //     button1El++
            //     button2El++
            //     button3El++
            // })