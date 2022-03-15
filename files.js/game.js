
const answerOne = "HTML";
const answerTwo = "CSS";
const answerThree = "DOM";
const answerFour = "OOP";
const incorrectAttempt = "2"

//user will modify the values
let playerReady = false;
let question = "";
let incorrectAttempt = 0


playerReady = confirm("Are You Ready To Play?")
console.log(playerReady, "Player Ready?")
if (playerReady) {
    question = prompt("What is the acronym for Hypertext Margin?")
    console.log(question, "should be equal to answer one");
} else {
    console.log("Player does not want to play.")
}
console.log(question, "should be equal to answer one");

if(question === "HTML") {
    alert("Correct" + "" + answerOne + "" + "is the right answer");
    question = prompt("What does CSS Stand for?");
} else if (question !== answerOne) {
    incorrectAttempt++;
    alert(
        `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAttempt}`
        );
}

if(question === answerTwo){
    alert("Correct" + "" + answerTwo + "" +  "is the right answer");
    question = prompt("What does DOM stand for?");
} else if (question !== answerTwo) {
    incorrectAttempt++;
    alert(
        `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAttempt}`
        );
}

if (question === answerThree) {
    alert("Correct" + answerTwo + "is the right answer");  
    let playerContinue = confirm("You made it to the question. Do you want to continue?")
    if(playerContinue){
        question = prompt(" What does OOP stand for?");
    }
}

if(question === answerFour) {
    alert("Congrats you got all the questions right");
}









