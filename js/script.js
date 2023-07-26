const quizContainer = document.querySelector('.quiz-container')
const startQuizButton = document.querySelector('.start-quiz')
const questionContainer = document.querySelector('.question-container')
const answersContainer = document.querySelector('.answers-container')
const textQuestion = document.querySelector('.question')
const nextQuestionBtn = document.querySelector('.next-question')

// ======= verificação de quem está jogando =======
const whosThereContainer = document.querySelector('.whos-there')
const janesBtn = document.querySelector('.janes')
const motherBtn = document.querySelector('.maria-antonia')

let questionIndex = 0
let trueAnswer = 0
let falseAnswer = 0
let whosThere

const startGame = () => {
    whosThereContainer.classList.remove('hide')
    startQuizButton.classList.add('hide')
}

const whosThereVerification = (event) => {
    questionContainer.classList.remove('hide')
    whosThereContainer.classList.add('hide')

    whosThere = event.target
    showNextQuastion()
}

const showNextQuastion = () => {   
    resetState()

    if (questions.length === questionIndex) {       
        return finishGame()
    }

    textQuestion.textContent = questions[questionIndex].question

    let questionClassColor = 1

    questions[questionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement('button')
        newAnswer.classList.add('button', 'answer', `answer${questionClassColor}`)
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        questionClassColor++
        answersContainer.appendChild(newAnswer)
        
        newAnswer.addEventListener('click', answerVerification)
    })
}

const resetState = () => {
    if (!nextQuestionBtn.classList.contains('hide')) {
        nextQuestionBtn.classList.add('hide')
    }

    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }
}

const answerVerification = (event) => {
    const selectedAnswer = event.target

    if (selectedAnswer.dataset.correct) {
        trueAnswer += 1
    } else {
        falseAnswer += 1
    }

    document.querySelectorAll('.answer').forEach(button => {

        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }

        button.disabled = true
    })

    nextQuestionBtn.classList.remove('hide')

    questionIndex++

    console.log(`acertos: ${trueAnswer}, erros: ${falseAnswer}`)
}

startQuizButton.addEventListener('click', startGame)
nextQuestionBtn.addEventListener('click', showNextQuastion)
janesBtn.addEventListener('click', whosThereVerification)
motherBtn.addEventListener('click', whosThereVerification)

const finishGame = () => {   

    if (whosThere.classList.contains('janes')) {
        quizContainer.innerHTML = `
    
        <div class="results">
            <h2>Resultado</h2>
            <p>Acertos: ${trueAnswer} Erros: ${falseAnswer} </p>  
            <p>Parabéns!! A pontuação não faz a menor diferença. Isso é só uma forma um pouco descontraída de te dizer que, apesar de não planejarmos nada, Deus te mandou um sobrinho. Sim, você vai ser titia. Não conta pra sua mãe ainda... (hahaha) Te amo!</p>
        </div>
    
        `
    } 

    if (whosThere.classList.contains('maria-antonia')) {
        quizContainer.innerHTML = `
    
        <div class="results">
            <h2>Resultado</h2>
            <p>Acertos: ${trueAnswer} Erros: ${falseAnswer} </p>  
            <p>Parabéns!! A pontuação não faz a menor diferença. Isso é só uma forma um pouco descontraída de te dizer que, apesar de não planejarmos nada, Deus te mandou mais um neto. Sim, você falou tanto que aconteceu. Agora vai ter que cuidar que nem prometeu... (hahaha) Te amo!</p>
        </div>
    `
    }  
  
}

// ======= Pesrguntas aqui =======
const questions = [
    {
        question: "Com quantos paus se faz uma canoa?",
        answers: [
            { text: "Com 2 paus", correct: false },
            { text: "Com 5 paus", correct: false },
            { text: "Com 7 paus", correct: false },
            { text: "Com 1 pau", correct: true }
        ]
    },
    {
        question: "Quando foi o dia de são nunca?",
        answers: [
            { text: "Nunca", correct: true },
            { text: "2 de agosto de 1985", correct: false },
            { text: "5 de abril de 1587", correct: false },
            { text: "31 de dezembro de 1999", correct: false }
        ]
    },
    {
        question: "Em um aquário tem 10 peixes e 5 morreram afogados. Quantos sobraram?",
        answers: [
            { text: "5 peixes", correct: false },
            { text: "10 peixes", correct: true },
            { text: "15 peixes", correct: false },
            { text: "nenhum peixe", correct: false }
        ]
    },
    {
        question: "Por que o menino colocou o despertador embaixo da cama?",
        answers: [
            { text: "Para não ouvir", correct: false },
            { text: "Para faltar na escola", correct: false },
            { text: "Para acordar em cima da hora", correct: true },
            { text: "Para dormir que nem bebê", correct: false }
        ]
    },
    {
        question: "O que é feito de água, mas se for colocado na água morrerá?",
        answers: [
            { text: "O gelo", correct: true },
            { text: "A nuvem", correct: false },
            { text: "O vento", correct: false },
            { text: "A terra", correct: false }
        ]
    },
    {
        question: "Qual é o nome do carro que mostra que vai chover?",
        answers: [
            { text: "Fusca azul", correct: false },
            { text: "Brasília amarela", correct: false },
            { text: "Celta preto", correct: true },
            { text: "Escort branco", correct: false }
        ]
    },
    {
        question: "O que é um fuínho?",
        answers: [
            { text: "É um tipo de fruta", correct: false },
            { text: "Instrumento de cozinha", correct: false },
            { text: "O marido da fuinha", correct: false},
            { text: "É um buaquinho na paede", correct: true }
        ]
    }
]