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

var index = 0

var questionsTextEl = document.querySelector("#question_text");
questionsTextEl = content[index].question;
//this is what controls the question text area display right now
document.getElementById("question_text").innerHTML = content[index].question

//button0
var button0El = document.querySelector("#button0")
button0El = content[index].options[0];
document.getElementById("button0").innerHTML = content[index].options[0]
//button1
var button1El = document.querySelector("#button1")
button1El = content[index].options[1];
document.getElementById("button1").innerHTML = content[index].options[1]
//button2
var button2El = document.querySelector("#button2")
button2El = content[index].options[2];
document.getElementById("button2").innerHTML = content[index].options[2]
//button3
var button3El = document.querySelector("#button3")
button3El = content[index].options[3];
document.getElementById("button3").innerHTML = content[index].options[3]


var correctEl = content[index].correct;
var keepScore = 0;


var timeLeft = 45;
function startQuiz() {

    var startButtonEl = document.querySelector("#start_button")
    startButtonEl.textContent = "Start the Timer and begin!"

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

        var nextButtonEl = document.querySelector("#next_button");
        nextButtonEl.textContent = "Next Question"

        nextButtonEl.addEventListener('click', event => {
            index++
            document.getElementById("question_text").innerHTML = content[index].question
            document.getElementById("button0").innerHTML = content[index].options[0]
            document.getElementById("button1").innerHTML = content[index].options[1]
            document.getElementById("button2").innerHTML = content[index].options[2]
            document.getElementById("button3").innerHTML = content[index].options[3]
            //high-score page
        })

    })


}
startQuiz()



document.querySelectorAll('.selector').forEach(item => {
    item.addEventListener('click', event => {

        if (correctEl) {
            alert("Correct! You get +10 points 🙂")
            keepScore += 10

        } else {
            alert("Wrong answer! Lose 5 seconds on the clock 😬")
            timeLeft -= 5
        }
    })
})

//localStorage

submitAnswer.addEventListener("click", function(){
    localStorage.setItem("keepScore", JSON.stringify(keepScore))
})

var storeScores = JSON.parse(localStorage.getItem("keepScore"))