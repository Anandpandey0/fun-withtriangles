const quizData = [  
    {  
     question: "  What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",  
     a: "45 \xB0",  
     b: "90 \xB0",  
     c: "60 \xB0",
     d: "75 \xB0",

     correct: "b",  
    },  
    {  
     question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",  
     a: "obtuse",  
     b: "acute",  
     c: "right angled",  
     d: "All of these",  
     correct: "c",  
    },  
    {  
     question: " A triangle can have",  
     a: "one right angle ",  
     b: "two right angles", 
     c: "three right angles" ,
     d: "Can be any" ,
     correct: "a",  
    },  
    {  
     question: " Which of the following can form a right angled triangle?",  
     a: "14, 15, 26 ",  
     b: "12, 16, 20",  
     c: "15, 20, 25",
     d: "35, 20, 25",
     correct: "b",  
    },  
    {  
     question: "  If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",  
     a: "100 \xB0  ",  
     b: "85  \xB0",  
     c: "45  \xB0",  
     d: "65  \xB0",  
     correct: "b",  
    },  
    {  
     question: "   If the largest angle in a triangle is 90°, what is the least possible value of the smallest angle of the triangle?",  
     a: "30 \xB0 ",  
     b: "10  \xB0",  
     c: "12  \xB0",  
     d: "15  \xB0",  
     correct: "b",  
    },  
    {  
     question: "   The perimeter of scalene triangle with sides a, b, c is",  
     a: "a + b + c ",  
     b: "2a ",  
     c: "None of these ",  
     d: "both a and b ",  
     correct: "a",  
    },   
    {  
     question: "   A scalene triangle has ___ lines of symmetry",  
     a: "two ",  
     b: "no ",  
     c: "Can be any of a and b ",  
     d: " None of these ",  
     correct: "a",  
    },  
    {  
     question: "   There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",  
     a: "85 \xB0 ",  
     b: "65 \xB0 ",  
     c: "45 \xB0 ",  
     d: "62 \xB0 ",  
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