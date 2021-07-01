// store all of the correct answers of the quiz
const correct_answers = ['D','B','C','B','A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit',e => {
    e.preventDefault();

    // create score for the user as start answering the questions
    let user_score = 0;
    const user_answers = [form.quest1.value,form.quest2.value,form.quest3.value,form.quest4.value,form.quest5.value];
    // compare user_answers to the correct_answers
    user_answers.forEach((answers, index) => {
        if(answers === correct_answers[index]) {
            user_score += 25;
        }
    });

    console.log(user_score);
});