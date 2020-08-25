(function () {
    function buildQuiz() {

        const output = [];

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

            

            // console.log(output);

            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join("")}</div>
            </div>`
            )

        })

        quizContainer.innerHTML = output.join('');



    };

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach( (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;


    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');

        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block'
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
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

    //pagination code 
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;



    //show first slide
    showSlide(currentSlide)

    // showSlide(0)


    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

})();
