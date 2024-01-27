const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";         
let tryAgain = "Sorry Cadet, not this time.";

candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];     
// let congrats = ["Good job cadet! Now, question 2.", "Nice! Now on to question 3.", "I've never been too good at math myself but... anyway, questions 4", "Alright last question! Question 5.", "Congratulations, you have finished the exam. Sit tight and i'll have this graded for you in no time!" ];
let tryAgainMessage = [];


tryAgainMessage.push(tryAgainMessage);
   

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("ATTENTION! What's your name Cadet? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log(`Candidate Name: ${candidateName}`);

for (let i = 0; i < questions.length; i++){
  
  candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);

// if (candidateAnswer === correctAnswers[i]) {
    
// console.log(`Your Answer: ${candidateAnswer}`);
// console.log(`Correct Answer: ${correctAnswers[i]}\n`);

// } else { 
//       console.log(`Your Answer: ${candidateAnswer}`);
//       console.log(`Correct Anwser: ${correctAnswers[i]}\n`);
//   }
}
console.log(`\nCandidate Name: ${candidateName}`)
for (let i=0; i<questions.length; i++) {
 
    console.log(`${i+1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
}
}




function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`Alright cadet, let's see. You answered ${candidateAnswers.join(', ')} and the correct answers are ${correctAnswers.join(', ')}`);

  let numOfCa = 5;
  let numOfCanA = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
          if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
            numOfCanA+=1;
          }
           
      }
  
  let grade = '';
      // console.log(numOfCanA);
      
    //TODO 3.2 use this variable to calculate the candidates score.
grade = (numOfCanA/numOfCa) * 100;
let canStatus = '';
  if (grade < 80) {
    canStatus = "FAILED"
  } else if (grade >= 80) {
    canStatus = "PASSED";
  }

  // console.log(grade);
  console.log(`>>> OVERALL GRADE:${grade} (${numOfCanA} of 5 responses correct)\n>>> Status: ${canStatus} <<<`);
  if (canStatus === "PASSED") {
    console.log(`\nWell, congratulations cadet ${candidateName}!\nYou have been promoted to the rank of Private.\nIt'll be an honor to fight along side you brother!`)
  } else {
    console.log("\nSorry cadet...\n Better luck next time. Dismissed");
  }
  
  return grade
    
  }


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`\nNice to meet you, Cadet ${candidateName}. Names Rex. I am commander of the 501st under General Anakin Skywalker.\nAlright, now that introductions are out of the way, let's get to the quiz, shall we?\nAlright, here is your paper. Good luck soldier!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};