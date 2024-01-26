
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var CApos = getRandomInt(1, 4);
var question = document.getElementById('Question');
var correctans = document.getElementById(CApos);
var next = document.getElementById('Next');
var previous = document.getElementById('Previous');
var data; 
var op1 = document.getElementById('1');
var op2 = document.getElementById('2');
var op3 = document.getElementById('3');
var op4 = document.getElementById('4');

function checkifcorrect(event){
    if(correctans.style.color!="green"){
        const t =event.target;
        if(t.textContent==correctans.innerHTML){
            t.style.color="green"
            t.textContent+=" correct"
        }
        else{
            correctans.style.color="green";
            correctans.innerHTML+=" Correct"

            for (var j = 1; j <= 4; j++) {
                if (j !== CApos) {
                    document.getElementById(j).style.color="red";
                    document.getElementById(j).innerHTML+=" Incorrect"
                }
            }
        }
    }
}


function startQuiz() {
var category = document.getElementById('category').value;
var difficulty = document.getElementById('difficulty').value;

    correctans.style.color="black";
    op1.style.color="black";
    op2.style.color="black";
    op3.style.color="black";
    op4.style.color="black";

    currentQuestionIndex = 0;

    function displayQuestion(index) {
        question.innerHTML = data.results[index].question;
        correctans.innerHTML = data.results[index].correct_answer ;

        var k = 0;
        for (var j = 1; j <= 4; j++) {
            if (j !== CApos) {
                document.getElementById(j).innerHTML = data.results[index].incorrect_answers[k];
                k++;
            }
        }
        previous.innerHTML = `<button style=" width: 100%;
                                              margin: 0 auto;
                                              height: 5vh;"> Previous </button>`;

        if (index === data.results.length - 1) {
            next.innerHTML = `<button style=" width: 100%;
                                              margin: 0 auto;
                                              height: 5vh;">End Quiz</button>`;
        } else {
            next.innerHTML = `<button style=" width: 100%;
                                              margin: 0 auto;
                                              height: 5vh;">Next</button>`;
        }
    }

    function endQuiz() {
        alert('Quiz has ended.');
        currentQuestionIndex = 0;
        question.innerHTML="";
        op1.innerHTML=""; op2.innerHTML=""; op3.innerHTML=""; op4.innerHTML="";
        previous.innerHTML = ``;
        next.innerHTML = ``;
    }

    var currentQuestionIndex = 0;
    
    if(difficulty==1){
        if(category==1){
            fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
        .then((result) => result.json())
        .then((fetchedData) => { 
            data = fetchedData; 
            displayQuestion(currentQuestionIndex);

            next.addEventListener('click', function () {
                if (currentQuestionIndex < data.results.length - 1) {
                    currentQuestionIndex++;
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    CApos = getRandomInt(1, 4);
                    correctans = document.getElementById(CApos);
                     displayQuestion(currentQuestionIndex);
                } else {
                    endQuiz();
                }
            });

            previous.addEventListener('click', function () {
                if (currentQuestionIndex > 0) {
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    currentQuestionIndex--;
                    displayQuestion(currentQuestionIndex);
                    
                } else {
                    alert('This is the first question.');
                }
            });
        });
    }
        else{
            fetch(`https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`)
        .then((result) => result.json())
        .then((fetchedData) => { 
            data = fetchedData; 
            displayQuestion(currentQuestionIndex);

            next.addEventListener('click', function () {
                if (currentQuestionIndex < data.results.length - 1) {
                    currentQuestionIndex++;
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    CApos = getRandomInt(1, 4);
                    correctans = document.getElementById(CApos);
                     displayQuestion(currentQuestionIndex);
                } else {
                    endQuiz();
                }
            });

            previous.addEventListener('click', function () {
                if (currentQuestionIndex > 0) {
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    currentQuestionIndex--;
                    displayQuestion(currentQuestionIndex);
                    
                } else {
                    alert('This is the first question.');
                }
            });
        });
    }
        
    }
    else{
        if(category==1){
            fetch(`https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&type=multiple`)
            .then((result) => result.json())
            .then((fetchedData) => { 
                data = fetchedData; 
            displayQuestion(currentQuestionIndex);

            next.addEventListener('click', function () {
                if (currentQuestionIndex < data.results.length - 1) {
                    currentQuestionIndex++;
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    CApos = getRandomInt(1, 4);
                    correctans = document.getElementById(CApos);
                     displayQuestion(currentQuestionIndex);
                } else {
                    endQuiz();
                }
            });

            previous.addEventListener('click', function () {
                if (currentQuestionIndex > 0) {
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    currentQuestionIndex--;
                    displayQuestion(currentQuestionIndex);
                    } else {
                        alert('This is the first question.');
                    }
                });
            });

        }else{
            fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((result) => result.json())
            .then((fetchedData) => { 
                data = fetchedData; 
            displayQuestion(currentQuestionIndex);

            next.addEventListener('click', function () {
                if (currentQuestionIndex < data.results.length - 1) {
                    currentQuestionIndex++;
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    CApos = getRandomInt(1, 4);
                    correctans = document.getElementById(CApos);
                     displayQuestion(currentQuestionIndex);
                } else {
                    endQuiz();
                }
            });

            previous.addEventListener('click', function () {
                if (currentQuestionIndex > 0) {
                    correctans.style.color="black";
                    op1.style.color="black";
                    op2.style.color="black";
                    op3.style.color="black";
                    op4.style.color="black";
                    currentQuestionIndex--;
                    displayQuestion(currentQuestionIndex);
                        
                    } else {
                        alert('This is the first question.');
                    }
                });
            });
        }
    }
}
