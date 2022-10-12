const quizData = [
    {
        question: 'What is CSS?',
        option_a: 'Car station state',
        option_b: 'Cascading style sheet',
        option_c: 'cascading sheet sheet',
        option_d: 'HTML',
        correct: 'option_b',
    },

    {
        question: 'Which is a programmimg language?',
        option_a: 'JavaScript',
        option_b: 'Html',
        option_c: 'CSS',
        option_d: 'Bootstrap',
        correct: 'option_a',
    },

    {
        question: 'Who is the president of Nigeria?',
        option_a: 'Barrack Obama',
        option_b: 'Strong Putin',
        option_c: 'Muhammed Buhari',
        option_d: 'Dom Bullshit',
        correct: 'option_c',
    },

    {
        question: 'What is HTML?',
        option_a: 'Hpertext Markup Language',
        option_b: 'css',
        option_c: 'cascading sheet sheet',
        option_d: 'JavaScript',
        correct: 'option_a',
    },
]

const quizContainer = document.querySelector('.quiz-container');
const answersbtns = document.querySelectorAll('.answer');
const question = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#btn');

// get first quiz data
let currentQuiz = 0;
let score = 0;

// load quiz
function loadQuiz(){
    removeChecked();
    currentQuizData = quizData[currentQuiz];
    question.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.option_a
    b_text.innerHTML = currentQuizData.option_b
    c_text.innerHTML = currentQuizData.option_c
    d_text.innerHTML = currentQuizData.option_d
}

loadQuiz();

// desectling the raido btns when a new quiz loads

function removeChecked(){
    answersbtns.forEach((answersbtn)=>{
        answersbtn.checked = false;
    })
}

// check grab selected answer
function grabOptionSelected(){
    let option;
    answersbtns.forEach((answersbtn)=>{
        if(answersbtn.checked){
            option = answersbtn.id
        }
    })
    return option;
}

submitBtn.addEventListener('click', ()=>{
     const isCorrect = grabOptionSelected();
     // only when an option is selected that we are allowed to move to the next quiz.
     if(isCorrect){
        if(isCorrect === quizData[currentQuiz].correct){
            score++;
        }
       if(currentQuiz < quizData.length -1){
           currentQuiz++;
           loadQuiz(); 
       } else{
           quizContainer.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2><button onclick='location.reload()'>Reload</button>`
       }

     } else{
         alert('pick an option');
     }
    
})
