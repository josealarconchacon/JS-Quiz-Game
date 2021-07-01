// store all of the correct answers of the quiz
const correct_answers = ['D','B','C','B','A'];
const form = document.querySelector('.quiz-form');
const show_score = document.querySelector('.show-score');

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

    // show result on page
    // update the content in the span class
    show_score.querySelector('span').textContent = `${user_score}%`;
    show_score.classList.remove('d-none');
});