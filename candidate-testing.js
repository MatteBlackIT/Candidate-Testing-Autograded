const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
//questOne = "Who was the first American woman in space? ";
  //questTwo = "True or false: 5 kilometer == 5000 meters? ";
    //questThree ="(5 + 3)/2 * 10 = ";
      //questFour ="Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
        //questFive = "What is the minimum crew size for the ISS? ";
          //bonusQuestion = `Bonus question cadet! Good soilders always follow orders. True or Flase? `;
//rA1 = "Sally Ride";
  //rA2 = "True";
    //rA3 = "40";
      //rA4 = "Trajectory";
        //rA5 = "3";
          //bA = "False";
c1= "good job cadet! Now, question 2.";
  c2 = "Nice! Now on to question 3.";
    c3 = "I've never been too good at math myself but... anyway, questions 4";
      c4 = "Alright last question! Question 5.";
        c5 = "Congratulations, you have finished the exam. Sit tight and i'll have this graded for you in no time!";
          //bC6 = "Sometimes, doing what's right is more important than orders cadet. A piece of advice, use your head and not your chip. Dismissed!";
let tryAgain = "Sorry Cadet, not this time.";
candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];
let congrats = [];
let tryAgainMessage = [];
//questions.push(questOne, questTwo, questThree, questFour, questFive);
//correctAnswers.push(rA1, rA2, rA3, rA4, rA5);
congrats.push(c1,c2,c3,c4,c5);
tryAgainMessage.push(tryAgainMessage);
    //console.table(questions);
    //console.table(correctAnswers);

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("ATTENTION! What's your name Cadet? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
  candidateAnswer = input.question(questions[i]);
  if (candidateAnswer === correctAnswers[i]) {
    console.log(congrats[i]);
    candidateAnswers.push(candidateAnswer);
} else { 
      console.log(tryAgain);
  }
}
}


function gradeQuiz(candidateAnswers) {
  
    {
      
  }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  console.log(`Alright cadet, let's see. You answered ${candidateAnswers.join(', ')} and the correct answers are ${correctAnswers.join(', ')}`);

if (candidateAnswers === correctAnswers) {
  console.log("Congratulations Cadet! You have been promoted to the rank of private! It's an honor to serve along side you! Welcome to the 501st battalion.");
}
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Nice to meet you, Cadet ${candidateName}. Names Rex. I am commander of the 501st under general Anakin Skywalker. Alright, now that that's out of the way, let's get to the quiz, shall we? Alright, question one: `);
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