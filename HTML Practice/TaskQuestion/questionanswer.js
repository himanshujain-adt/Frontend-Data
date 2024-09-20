const quiz = [{ question: "What is the capital of France?", correctAnswer: "Paris", correctAnswer1: "Dubai" },
{ question: "Is JavaScript a programming language? (yes/No)", correctAnswer: "Yes", correctAnswer1: "No" },
{ question: "What is 5 + 3?", correctAnswer: "8", correctAnswer1: "5" },
{ question: "Is Earth the third planet from the Sun? (Yes/No)", correctAnswer: "Yes", correctAnswer1: "No" },
    // { question: "What color is the sky on a clear day?", correctAnswer: "Blue", correctAnswer1: "Black" },
    // { question: "Is 10 greater than 15? (Yes/no)", correctAnswer: "No", correctAnswer1: "Yes" },
    // { question: "What is the opposite of 'up'?", correctAnswer: "Down", correctAnswer1: "Up" },
    // { question: "Is water a solid at room temperature? (Yes/No)", correctAnswer: "No", correctAnswer1: "Yes" },
    // { question: "Which planet is known as the Red Planet?", correctAnswer: "Mars", correctAnswer1: "Venus" },
    // { question: "How many legs does a spider have?", correctAnswer: "8", correctAnswer1: "10" }
]
let i = 0;
let userAnswers = [];
window.onload = nextQuestion;
function nextQuestion() {

    if (i >= quiz.length) {

        document.getElementById("quizForm").style.display = "none";
        document.getElementById("btnCheck").style.display = "none";
        document.getElementById("btnNext").style.display = "none";
        document.getElementById("test1").innerText = "Quiz Completed!";
        document.getElementById("result").innerText = "";
        showAllAnswers();

        // document.getElementById("prepareSheet").innerText = "Wait your answer sheet is preparing..."
        // document.getElementById("prepareSheet").style.color = "blue";
        // setTimeout(() => {



        // }, 5000);
        // document.getElementById("prepareSheet").innerText = "";
        return;
    }
    document.getElementById("result").innerText = "";
    const radios = document.querySelectorAll('input[name="capital"]');
    radios.forEach(radio => radio.checked = false);
    document.getElementById("test1").innerHTML = `Question ${(i + 1)}: ${quiz[i].question}`;

    document.querySelector('label[for="option1"]').innerText = quiz[i].correctAnswer;  // Correct Answer
    document.querySelector('label[for="option2"]').innerText = quiz[i].correctAnswer1;


}

function getCheckAnswer() {


    const correctValue = quiz[i].correctAnswer;
    const selectedRadio = document.querySelector('input[name="capital"]:checked');

    if (selectedRadio) {
        const selectedValue = document.querySelector(`label[for="${selectedRadio.id}"]`).innerText;
        userAnswers.push({ question: quiz[i].question, selectedAnswer: selectedValue, correctAnswer: correctValue });

        if (selectedValue === correctValue) {
            document.getElementById("result").innerText = "Correct Answer!";
            document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").innerText = "Wrong Answer.";
            document.getElementById("result").style.color = "red";
        }
        answered = true;
        i++;
    } else {
        document.getElementById("result").innerText = "Please  select an option.";
        document.getElementById("result").style.color = "red";
    }
}
function showAllAnswers() {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ''; // Clear the container


    //whwn i am trying to print report
    // const report = `<div> 
    // <button onclick="window.print()">Print Report</button>
    // </div>`
    // document.getElementById("printButton").innerHTML = report;


    //try code for print report

    const printButton = document.getElementById("printButton");
    printButton.disabled = false;
    printButton.addEventListener("click", function () {
        window.print();
        printButton.disabled = true;
        // document.getElementById("printButton").innerText="";
    });
    // Display each question, user's answer, and correct answer


    userAnswers.forEach((item, index) => {
        const questionHTML = `
            <div>
                <h3>Question ${index + 1}: ${item.question}</h3>
                <p class="user-answer">Your answer: ${item.selectedAnswer}</p>
                <p class="${item.selectedAnswer === item.correctAnswer ? 'correct' : 'wrong'}">
                    Correct answer: ${item.correctAnswer}
                </p>
            </div>
              
        `;
        resultsContainer.innerHTML += questionHTML;
    });



    // Show the results section
    document.getElementById("allAnswers").style.display = "block";
    // ` <button onclick="window.print()">Print Report</button> `;
}

