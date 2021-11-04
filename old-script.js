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
startButtonEl.textContent = "Start the Timer and begin!"

var index = 0
//correct answer
var correctEl = content[index].correct

//question text area
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


// document.querySelectorAll('.selector').forEach(item => {
//     item.addEventListener('click', event => {
        
//         if (event.target.textContent == correctEl) {
//                             alert("Correct! You get +10 points 🙂")
//                             keepScore += 10
//                             index++
                                                
//                         } else {
//                             alert("Wrong answer! Lose 5 seconds on the clock 😬")
//                             timeLeft -= 5
//                             index++
//     }

// })
// })



//just reading the first click; not reading the next one when the next question and options come up. why??
//need it to move to next index
//changeContent function
    //
function changeContent(event){
event.preventDefault();
document.getElementById("question_text").textContent = questionsTextEl
document.getElementById("button0").innerHTML = button0El
document.getElementById("button1").innerHTML = button1El
document.getElementById("button2").innerHTML = button2El
document.getElementById("button3").innerHTML = button3El

}


//index control


//changeContent function is called everytime a button is clicked
    button0El.addEventListener("click", changeContent);
    

//function that is an event; holds the if statements
//add listener (click) for clicking on the right answer; for all of the buttons
//add listener (click) for clicking on the wrong answer; for all of the buttons ; takes in changeContent function

 
// document.querySelectorAll('.selector').forEach(item => {
//     item.addEventListener('click', event => {
        
//         if (event.target.textContent == correctEl) {
//                             alert("Correct! You get +10 points 🙂")
//                             keepScore += 10
//                             index++
//                             document.getElementById("question_text").innerHTML = content[index].question
//                             document.getElementById("button0").innerHTML = content[index].options[0]
//                             document.getElementById("button1").innerHTML = content[index].options[1]
//                             document.getElementById("button2").innerHTML = content[index].options[2]
//                             document.getElementById("button3").innerHTML = content[index].options[3]
                            
//                         } else {
//                             alert("Wrong answer! Lose 5 seconds on the clock 😬")
//                             timeLeft -= 5
//                             // index++
//                             document.getElementById("question_text").innerHTML = content[index].question
//                             document.getElementById("button0").innerHTML = content[index].options[0]
//                             document.getElementById("button1").innerHTML = content[index].options[1]
//                             document.getElementById("button2").innerHTML = content[index].options[2]
//                             document.getElementById("button3").innerHTML = content[index].options[3]
//     }

// })
// })
//now I can traverse the array object by the El elements I have!
// index controls then El elements


//traversing the array object
        //stopping and clicking on each index, giving the logic results of clicking
        //triggering next index

// while(index < 5) {

//     index++
//     questionsTextEl[index]
//     button0El[index]
//     button1El[index]
//     button2El[index]
//     button3El[index]
// }
// console.log(index);



// questionTextEl.textContent = content[index].question
//         button0El.textContent = content[index].options[0]
//         button1El.textContent = content[index].options[1]
//         button2El.textContent = content[index].options[2]
//         button3El.textContent = content[index].options[3]
// index++

// content[index].question
// content[index]

               //-------------------part 1 finished^-------------------//

               //-------------------part 2 and 3 start-------------------//
               //trying to add clicking event listeners to each buttonEl
               //timer system
               //point system
               //on clicks for buttons connected to point system logic


//timer system
// function: start button function
// every time start button is clicked start timer
var timeLeft = 45;
var keepScore = 0;


function startQuiz() {
    var index = 0;
    
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

                //-------------------part 4 start-------------------//
                    //go to next question

        //traversing the array object
        //stopping and clicking on each index, giving the logic results of clicking
        //triggering next index
        //
        var index = 0;
       
        

        // content.forEach(function(){
        //     document.querySelectorAll('.selector').forEach(item => {
        //         item.addEventListener('click', event => {
        //             console.log("hello");
        //         } )
        //     })
        // })
        
        

        // document.querySelectorAll('.selector').forEach(item => {
        //     item.addEventListener('click', event => {
                
        //         while(index<5) {
        //             questionTextEl.textContent = content[index].question
        //             console.log(questionTextEl.textContent);
        //             button0El.textContent = content[index].options[0]
        //             console.log(button0El.textContent);
        //             button1El.textContent = content[index].options[1]
        //             console.log(button1El.textContent);
        //             button2El.textContent = content[index].options[2]
        //             console.log(button2El.textContent);
        //             button3El.textContent = content[index].options[3]
        //             console.log(button3El.textContent);

        //         if (event.target.textContent == content[index].correct) {
        //             alert("Correct! You get +10 points 🙂")
        //             keepScore += 10
        //             questionTextEl.textContent = content[index].question
        // button0El.textContent = content[index].options[0]
        // button1El.textContent = content[index].options[1]
        // button2El.textContent = content[index].options[2]
        // button3El.textContent = content[index].options[3]
                    
        //         } else {
        //             alert("Wrong answer! Lose 5 seconds on the clock 😬")
        //             timeLeft -= 5
        
        //         }
        //         index ++
                
        //     }
                
        //             console.log(index);
            
        //     });
        //     });
            
            
        


        
    




    
//     document.querySelectorAll('.selector').forEach(item => {
        

//         item.addEventListener('click', event => {
//             var index = 0;
//             if (event.target.textContent == content[index].correct) {
//                 alert("Correct! You get +10 points 🙂")
//                 keepScore += 10
                
    
//             } else {
//                 alert("Wrong answer! Lose 5 seconds on the clock 😬")
//                 timeLeft -= 5
    
//             }


//             // while(index< 5) {
//             //     questionTextEl.textContent = content[index].question
//             //     button0El.textContent = content[index].options[0]
//             //     button1El.textContent = content[index].options[1]
//             //     button2El.textContent = content[index].options[2]
//             //     button3El.textContent = content[index].options[3]

//             //     document.querySelectorAll('.selector').forEach(item => {
//             //                 item.addEventListener('click', event => {
//             //                     if (event.target.textContent == content[index].correct) {
//             //                         alert("Correct! You get +10 points 🙂")
//             //                         keepScore += 10
//             //                         index ++
                        
//             //                     } else {
//             //                         alert("Wrong answer! Lose 5 seconds on the clock 😬")
//             //                         timeLeft -= 5
                        
//             //                     }
//             //                 })
        
//             //                 })
//             //     index++
//             // }
//             // for (var index = 0; index < content.length; index++) {
//             // questionTextEl.textContent = content[index].question
//             //     button0El.textContent = content[index].options[0]
//             //     button1El.textContent = content[index].options[1]
//             //     button2El.textContent = content[index].options[2]
//             //     button3El.textContent = content[index].options[3]
//             //     document.querySelectorAll('.selector').forEach(item => {
//             //         item.addEventListener('click', event => {
//             //             if (event.target.textContent == content[index].correct) {
//             //                 alert("Correct! You get +10 points 🙂")
//             //                 keepScore += 10
//             //                 index ++
                
//             //             } else {
//             //                 alert("Wrong answer! Lose 5 seconds on the clock 😬")
//             //                 timeLeft -= 5
                
//             //             }

//             //         })
                    

//             //     })
                
//             // }
            
    
    
//         })
    
//     })
    












// //   button1El.addEventListener('click', function (){
// //     questionTextEl.textContent = content[2].question
// //     button0El.textContent = content[2].options[0]
// //     button1El.textContent = content[2].options[1]
// //     button2El.textContent = content[2].options[2]
// //     button3El.textContent = content[2].options[3]
// //     })
  

//             // button0El.addEventListener("click", function(){
//             //     questionTextEl++
//             //     button0El++
//             //     button1El++
//             //     button2El++
//             //     button3El++
//             // })

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