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
            question: "What method adds a new element to the end of an array?",
            answers: {
                a: "add()",
                b: "push()",
                c: "concat()"
            },
            correctAnswer: "b"
        },
        {
            question: "Fill in the blank: Bootstrap is a type of _________ used for faster and easier web development",
            answers: {
                a: "framework",
                b: "element",
                c: "selector"
            },
            correctAnswer: "a"
        },
        {
            question: "Fill in the blanks: The CSS box model consists of ______, ______, ________, and _______.",
            answers: {
                a: "media queries, styling, metadata, links",
                b: "html, javascript, python, sql",
                c: "margins, borders, padding, and actual content"
            },
            correctAnswer: "c"
        },
        {
            question: "True or false: Text between /* and */ will be ignored by javascript.",
            answers: {
                a: "True",
                b: "False",
                c: "Neither: it will return an error"
            },
            correctAnswer: "a"
        },
        {
            question: "How can I return a random number between 0 and 1?",
            answers: {
                a: "randomizer()",
                b: "Math.randomizer()",
                c: "Math.random()"
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
