const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const questionText = document.querySelector('.question-text');
const optionList = document.querySelector('.option-list');
const questionTotal = document.querySelector('.question-total');

let currentQuestionIndex = 0;

const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return;

    questionText.textContent = `${currentQuestion.numb}. ${currentQuestion.question}`;
    questionTotal.textContent = `${currentQuestion.numb} of ${questions.length} Question`;

    optionList.innerHTML = '';

    currentQuestion.option.forEach((optionText) => {
        const option = document.createElement('div');
        option.className = 'option';
        option.innerHTML = `<span>${optionText}</span>`;
        option.addEventListener('click', () => {
            console.log('Correct answer:', currentQuestion.answer);
        });
        optionList.appendChild(option);
    });
};

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    renderQuestion();
};

renderQuestion();