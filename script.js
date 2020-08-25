function buildQuiz() {

    const output= [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

        //create variable to store the list of possile answers
        const answers = [];

        //for each of the answer choicess
        for (letter in currentQuestion.answers) {

            //create an HTML radio button
            answers.push(
                `<label> <input type= "radio" name= "question${questionNumber}" value= "${letter}"> ${letter} : ${currentQuestion.answers[letter]} </label>`
            );
        }

        console.log(answers);

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class = "answers"> ${answers.join('')} </div>`

        );

        console.log(output);

    })

    quizContainer.innerHTML = output.join('');

};

function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerConstainer = answerContainers
    })

};


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "What is the best dog breed?",
        answers: {
            a: "Poodle",
            b: "Beagle",
            c: "Pitbull"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the water brand",
        answers: {
            a: "Dasani",
            b: "Aquafina",
            c: "Kroger"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the best phone brand",
        answers: {
            a: "Windows",
            b: "Samsung",
            c: "Apple"
        },
        correctAnswer: "c"
    }
];







//call on buildquiz function to display quiz right away

buildQuiz();

//show results when submit button is clicked
submitButton.addEventListener('click', showResults);

