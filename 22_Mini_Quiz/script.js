const questions = [
    {
        text: 'Which language gives a page its structure?',
        answers: ['HTML', 'CSS', 'JavaScript'],
        correct: 0
    },
    {
        text: 'Which CSS property changes text color?',
        answers: ['font-style', 'color', 'background'],
        correct: 1
    },
    { text: 'Which tag creates a link?', answers: ['<p>', '<img>', '<a>'], correct: 2 },
    {
        text: 'Which keyword declares a variable that can change?',
        answers: ['let', 'const', 'return'],
        correct: 0
    },
    {
        text: 'Which event happens when a button is pressed?',
        answers: ['load', 'click', 'resize'],
        correct: 1
    }
];
let index = 0;
let score = 0;
let answered = false;
const next = document.querySelector('#next');
const restart = document.querySelector('#restart');
function showQuestion() {
    answered = false;
    next.disabled = true;
    next.hidden = false;
    restart.hidden = true;
    next.textContent = index === questions.length - 1 ? 'See results' : 'Next question';
    document.querySelector('#progress').textContent =
        'Question ' + (index + 1) + ' of ' + questions.length;
    document.querySelector('#question').textContent = questions[index].text;
    document.querySelector('#feedback').textContent = '';
    const answers = document.querySelector('#answers');
    answers.replaceChildren();
    questions[index].answers.forEach((text, answerIndex) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', () => {
            if (answered) return;
            answered = true;
            const correct = answerIndex === questions[index].correct;
            if (correct) score++;
            document.querySelector('#feedback').textContent = correct
                ? 'Correct!'
                : 'The answer is ' + questions[index].answers[questions[index].correct] + '.';
            [...answers.children].forEach((option, optionIndex) => {
                option.disabled = true;
                if (optionIndex === questions[index].correct) option.classList.add('correct');
            });
            if (!correct) button.classList.add('wrong');
            next.disabled = false;
        });
        answers.append(button);
    });
}
next.addEventListener('click', () => {
    index++;
    if (index < questions.length) showQuestion();
    else {
        document.querySelector('#progress').textContent = 'Quiz complete';
        document.querySelector('#question').textContent =
            'You scored ' + score + ' out of ' + questions.length + '.';
        document.querySelector('#answers').replaceChildren();
        document.querySelector('#feedback').textContent =
            score === questions.length ? 'A perfect round!' : 'Try another round to practice.';
        next.hidden = true;
        restart.hidden = false;
    }
});
restart.addEventListener('click', () => {
    index = score = 0;
    showQuestion();
});
showQuestion();
