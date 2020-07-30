var timer = 75;
const answerButtonEl = document.getElementById('answer-button-group');

const content = 
        {   question:'What tag is required to insert Javascript code into an html document ?',
            answers: [ '<header>', "<javascript>", "<script>", "<title>"],
            correct: "<script>"    
            
        }


$('#start-btn').click(startQuiz);

function startQuiz() {
    console.log('works');
    $("#welcome").hide();
    $('#start-btn').hide();
    $('#the-questions').show();
    showQuestion();
}


function showQuestion() {

    
        $('#question').text(content.question);

        content.answers.forEach (answer => {   
        const button = document.createElement('button')
        button.innerText = answer
        button.classList.add("btn", "btn-primary", "answer-btn", "answer-text");
       
        answerButtonEl.append(button); 
        })

        var buttonAnswers = $('button.answer-btn');
        buttonAnswers.on("click", compare);
        
};

function compare(event) {
    
    var element = event.target;
    console.log(element.innerText)
    console.log(content.correct)

    var $message = $('<div>');
    $message.addClass('card-footer text-muted');
    
        
        if (element.innerText === content.correct) {
            console.log("correct")
            $('div#august').html("correct");
            // createDiv.textContent = "Good job!";
        } else {
            console.log("wrong");
            $('div#august').html("WRONG");
            // createDiv.textContent = "WRONG"
        }
    // }
}