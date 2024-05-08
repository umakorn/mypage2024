let m = random(3,9)
let n = m**2
let qu1 = " 1. `sqrt("+m+")` = ?"
let a1 = m
let b1 = m+1
let c1 = m+2
let d1 = m+3

const quizData = [
    {quiz: qu1,a: a1,b: b1,c: c1,d: d1,correct:"a"},
    // {quiz: qu1,a: b1,b: a1,c: c1,d: d1,correct:"b"},
    // {quiz: qu1,a: c1,b: b1,c: a1,d: d1,correct:"c"},
    // {quiz: qu1,a: d1,b: b1,c: c1,d: a1,correct:"d"},
    {quiz: " 2. `root(3)(8)` = ?",a: "2",b: "3",c: "4",d: "5",correct:"a"},
    {quiz: " 3. `4^3/2^5` = ?",a: "3",b: "5",c: "7",d: "9",correct:"a"},
    {quiz: " 4. 4+5 = ?",a: "9",b: "7",c: "5",d: "3",correct:"a"},
    {quiz: " 5. 3+4 = ?",a: "3",b: "5",c: "7",d: "9",correct:"c"},
    {quiz: " 6. 4+5 = ?",a: "9",b: "7",c: "5",d: "3",correct:"a"},
]
let quizContainer = document.querySelector(".quiz-container")
let quizHead = document.getElementById("quiz-header")
let quizEl = document.getElementById("question")
let answerEls = document.querySelectorAll(".answer")
let choiceA = document.getElementById("a-text")
let choiceB = document.getElementById("b-text")
let choiceC = document.getElementById("c-text")
let choiceD = document.getElementById("d-text")
let submitBtn = document.getElementById("submit")

let score = 0
let currentQuiz = 0
no = 1
loadQuiz()

function loadQuiz(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
    let currentQuizData = quizData[currentQuiz]
    quizHead.innerHTML = "แบบทดสอบความเข้าใจ"
    quizEl.innerHTML = currentQuizData.quiz
    choiceA.innerHTML = currentQuizData.a
    choiceB.innerHTML = currentQuizData.b
    choiceC.innerHTML = currentQuizData.c
    choiceD.innerHTML = currentQuizData.d
}

submitBtn.addEventListener('click',()=>{
    let answer = checkChoiceAnswer()
    console.log(answer)
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
    currentQuiz++
    if(currentQuiz<quizData.length){
        loadQuiz()
        MathJax.typesetPromise()
    }else{
        quizContainer.innerHTML="<center><h2>Complete<br>คุณได้ `"+score+" / 6`คะแนน</h2></center><button type = \"submit\" onclick = \"refresh()\">สอบใหม่</button>"
        MathJax.typesetPromise()
    }
}
})

function checkChoiceAnswer(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
 
function refresh() {
    location.reload();
}
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}