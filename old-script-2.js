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

                //-----------------------------------//
//for loop through each property, increase the index,...index++
//control it by click event on each button

function contentLoop() {
    var index = 0
        //question 
        var questionsTextEl = document.querySelector("#question_text");
        //content:question property
        questionsTextEl = content[index].question;

        //button0
        var button0El = document.querySelector("#button0")
        //content: option 0 property
        button0El = content[index].options[0];

        //button1
        var button1El = document.querySelector("#button1")
        //content: option 1 property
        button1El = content[index].options[1];

        //button2
        var button2El = document.querySelector("#button2")
        //content: option 2 property
        button2El = content[index].options[2];

        //button3
        var button3El = document.querySelector("#button3")
        //content: option 3 property
        button3El = content[index].options[3];

document.getElementById("question_text").innerHTML = questionsTextEl
document.getElementById("button0").innerHTML = button0El
document.getElementById("button1").innerHTML = button1El
document.getElementById("button2").innerHTML = button2El
document.getElementById("button3").innerHTML = button3El

document.querySelectorAll('.selector').forEach(item => {
    item.addEventListener('click', event => {


        var keepScore = 0;
 
        
        if (event.target.textContent == content[index].correct) {
            alert("Correct! You get +10 points 🙂")
            keepScore += 10
                                
        } else {
            alert("Wrong answer! Lose 5 seconds on the clock 😬")
            timeLeft -= 5
        }

        console.log(keepScore);   
})
})

index++
console.log(index);
document.getElementById("question_text").innerHTML = questionsTextEl
document.getElementById("button0").innerHTML = button0El
document.getElementById("button1").innerHTML = button1El
document.getElementById("button2").innerHTML = button2El
document.getElementById("button3").innerHTML = button3El

    }


document.querySelectorAll('.selector').forEach(item => {
    item.addEventListener('click', contentLoop)
})








                //-----------------------------------//
var timeLeft = 45;

var startButtonEl = document.querySelector("#start_button")
startButtonEl.textContent = "Start the Timer and begin!"

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

    })
}
startQuiz()
                //-----------------------------------//










