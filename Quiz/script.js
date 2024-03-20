const questions = document.querySelectorAll('.question');

for (let i = 1; i < questions.length; i++) {
    questions[i].style.display = 'none';
}

let score = 0;

function checkAnswer(selectedOption, isCorrect) {
    
    let optionToQuestionNumber = {}
    for (let i = 1; i <= questions.length; i++){
        optionToQuestionNumber [`A${i}`]=i
        optionToQuestionNumber [`B${i}`]=i
        optionToQuestionNumber [`C${i}`]=i
        optionToQuestionNumber [`D${i}`]=i
    }

    console.log(optionToQuestionNumber)
    
    const questionNumber = optionToQuestionNumber[selectedOption];
    
    if (isCorrect) {
        score++;
    }

    questions[questionNumber - 1].style.display = 'none';

    if (questionNumber < questions.length) {
        questions[questionNumber].style.display = 'block';
    } else {
        alert("Quiz completed! Your score is: " + score);
    }

}
