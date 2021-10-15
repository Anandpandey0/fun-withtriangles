const quizData = [  
    {  
     question: "  What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",  
     a: "45 ",  
     b: "90 ",  
     c: "60 ",    
     correct: "b",  
    },  
    {  
     question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",  
     a: "obtuse",  
     b: "acute",  
     c: "right angled",  
     correct: "c",  
    },  
    {  
     question: " A triangle can have",  
     a: "one right angle ",  
     b: "two right angles",  
     correct: "a",  
    },  
    {  
     question: " Which of the following can form a right angled triangle?",  
     a: "14, 15, 26 ",  
     b: "12, 16, 20",  
     correct: "",  
    },  
    {  
     question: "  If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",  
     a: "100 &#176 ",  
     b: "85  &#176",  
     correct: "b",  
    },  
    {  
     question: "   If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",  
     a: "30 &#176 ",  
     b: "10  &#176",  
     correct: "",  
    },  
    {  
     question: "   The perimeter of scalene triangle with sides a, b, c is",  
     a: "a + b + c ",  
     b: "2a ",  
     c: "None of these ",  
     correct: "a",  
    },   
    {  
     question: "   A scalene triangle has ___ lines of symmetry",  
     a: "two ",  
     b: "no ",  
     c: "15 ",  
     correct: "a",  
    },  
    {  
     question: "   There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",  
     a: "85 &#176 ",  
     b: "65 &#176 ",  
     c: "45 &#176 ",  
     correct: "a",  
    },  
   ];  
   const quiz = document.getElementById("quiz");  
   const answerElements = document.querySelectorAll(".answer");  
   const questionElement = document.getElementById("question");  
   const a_text = document.getElementById("a_text");  
   const b_text = document.getElementById("b_text");  
   const c_text = document.getElementById("c_text");  
   const d_text = document.getElementById("d_text"); 
   const submitButton = document.getElementById("submit");  
   let currentQuiz = 0;  
   let score = 0;  
   const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
   };  
   const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
     if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
   };  
   const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
   };  
   loadQuiz();  
   submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
     if (answer === quizData[currentQuiz].correct) score++;  
     currentQuiz++;  
     if (currentQuiz < quizData.length) loadQuiz();  
     else {  
      quiz.innerHTML = `  
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
         <button onclick="history.go(0)">Play Again</button>  
       ` 
     }  
    }  
   });  