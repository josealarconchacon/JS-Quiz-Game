// store all of the correct answers of the quiz
const correct_answers = ['D','B','C','B','A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit',e => {
    e.preventDefault();

    // create score for the user as start answering the questions
    let user_score = 0;
    const user_answers = [form.quest1,form.quest2,form.quest3,form.quest4,form.quest5];
    // compare user_answers to the correct_answers
    
});