var timer = 75;
var timerEl = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const welcomeEl = document.getElementById('welcome');
const quizEl = document.getElementById('the-questions');
const questionsEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');


//functions

function startQuiz() {
    console.log('started');
    welcomeEl.classList.add('hide');
    startButton.classList.add('hide');
    quizEl.classList.remove('hide');
    showQuestion();

};

function showQuestion(){
    const content=
        {
            question:'What is this?',
            answers: [
                {text:'option1', correct: true},
                {text:'option2', correct: false}
            ]
        };    
    
    console.log(content.question);

    questionsEl.textContent = content.question;

};





//event listeners 

startButton.addEventListener("click", startQuiz);