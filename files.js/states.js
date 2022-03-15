

const stateOne = "Tennessee";
const stateTwo = "Alabama";
const stateThree = "Ohio";
const stateFour = "California";
const stateFive = "Texas";
const stateSix = "Oregon";
const stateSeven = "Washington";
const stateEight = "Colorado";
const stateNine = "Michigan";
const stateTen = "Arizona";
const incorrectAnswerLimit = 2;

let personReady = false;
let question = "";
let incorrectAnswer = 0;

personReady = confirm("Are You Ready To Play The States?");
console.log (personReady, "Player Ready");
if (personReady) {
    question = prompt("What is considered the Volunteer State?");
    if (question === "Tennessee") {
        alert("You Are Correct");
        question = prompt("What state do the Crimson Tide play in?");
    } else if (question !== stateOne) {
        incorrectAnswer++;
        alert(
            `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}`
        );
        question = prompt("What state do the Crimson Tide play in?");
        
    } 
    
    if (question === "Alabama") {
        alert("You Are Correct");
    } else if (question !== stateTwo && incorrectAnswer <=1) {
        incorrectAnswer++;
        alert(
            `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
        );
    }

    question = prompt("Lebron James is from what state?");
    if (question === "Ohio") {
        alert("You Are Correct");
        question = prompt("The LA Rams play in what State?");
    } else if (question !== stateThree && incorrectAnswer <=2) {
        incorrectAnswer++;
        } else {
        alert(
            `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
        );
        question = prompt("The LA Rams play in what State?");
        }

        
        if (question === "California") {
            alert("You Are Correct");
        } else if (question !== stateFour) {
            incorrectAnswer++;
            alert(
                `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
            );
            question = prompt("Where do the San Antonio Spurs play?");
        }
    
           
        if (question === "Texas") {
            alert("You Are Correct");
            question = prompt("What state is the Nike Headquarters located in?");
            } else if (question !== stateFive) {
                incorrectAnswer++;
            alert(
                `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
            );
            question = prompt("What state is the Nike Headquarters located in?");
            }
        }
        

        if (question === "Oregon"){
            alert("You Are Correct");
            question = prompt("What state did Klay Thompson play collegiate basketball in?");
            } else if (question !== stateSix) {
            incorrectAnswer++;
            alert(
                `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
            );
            question = prompt("What state did Klay Thompson play collegiate basketball in?");
            }
        
        
        
        if (question === "Washington") {
            alert("You Are Correct");
            question = prompt("What is considered the Mile High State?");
            } else if (question !== stateSeven) {
            incorrectAnswer++;
            alert(
                `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
            );
            question = prompt("What is considered the Mile High State?");
            }
        
        
        if (question === "Colorado") {
            alert("You are Correct");
            question = prompt("What state is Flint located in?");
            } else if (question !== stateEight) {
            incorrectAnswer++;
            alert(
                `Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}` 
            );
            question = prompt("What state is Flint located in?");
            }
        
        
       
        if (question === "Michigan") {
            alert("You Are Correct");
            question = prompt("Where do the Pheonix Suns play?");
            } else if (question !== stateNine) {
            incorrectAnswer++;
            alert(`Sorry That wasn incorrect, number of incorrect attemps: ${incorrectAnswer}`);
            question = prompt("Where do the Pheonix Suns play?");
            }
        
    
        if (question === "Arizona") {
            alert("You Are Correct. Congrats On Finishing The Game!");
        } else if (question !== stateTen && incorrectAnswer > incorrectAnswerLimit) {
            alert("You failed the game. Retry")
        } else if (question !== stateTen && incorrectAnswer < incorrectAnswerLimit) {
            incorrectAnswer++;
            alert(
                `Sorry That wasn incorrect. The game is over. You had this number of incorrect attemps: ${incorrectAnswer}` 
            );
        }
      
    
    
   
    
    




