// let alpha ="badjvsdjskdbhaudsbnklsdn";

// console.log(alpha.length, "lenght of string")
// console.log(typeof alpha.length)

// for(let i = 0; i <= alpha.length -1 ; i++ ) {
//     console.log("index" , i )
//     console.log("alpha in the string:", alpha[i], "\n")
// }

// let alpha = "abcdefg";
// let substituteArr = [];
// let listOfStudents = ["Zaree", "Jessica" , "John" , "Laura" , "Tab" , "Jo" , "Varshawn" , "Sio" , "Curtis"]

// console.log(listOfStudents.length, "total amount of roster")

// for(let i = 0; i<= listOfStudents -1 ; i++) {
//     if(listOfStudents[i]){
//         console.log(listOfStudents[i])
//         inClassToday.push(listOfStudents[i])
//     }
// }


// Array
// console.log("everyone that showed up in class today" , inClassToday)
// console.log("total amount that showed up" , inClassToday.length)

// let i = 0
// let weatherArr = ["Sunday" , "Monday" , "Tuesday"]

// while(i < weatherArr.length) {
//     weatherArr.pop()
// }

// console.log(wheatherArr)

// object

// let developer = {
//     name: "Zaree" ,
//     age: 19,
    // skills: ["javascript" , "html" , "css"],
    // communication : {
    // standUp: "average" ,
    // meetings: "below average",
    // clientDebrief: "above average",
    // }

// }

// console.log(developer.name)

//if i wanted to grab my name and age id use ${developer.name} / ${developer.age} 
//to get acess to anything in communication you have to use ${developer.communication.__}
//KEY VALUE PAIRS ex: key: "value",

// Code under shows how to use the delete and .startsWith function in JavaScript fo Arrays
// let names = ["Mike" , "John" , "Alex" , "Mary"];
// for (let i = 0; i < names.length; i++) {
//     if(names[i].startsWith("M")) {
//         delete names[i];
//         continue
//     }
//     names[i] = "hello" + names[i];
// }
// console.log(names);

//break just stops the loop
//code is wayy more literal than you make it

// const myName = "Zaree"
// const splitName = myName.split("");
// const doubleSplitName = myName.split(" ")
// for (let i = 0; i < splitName.length - 1, i++;) {
//     if(splitName[i] === "e")
//     console.log(splitName[i], 'this is supposed to uppercase the alpha')
//     splitName[i] = splitName[i].toUpperCase()
// }


function handleGreeting(name) {

    return `Welcome ${name}`
 }
  let handleGreetingES = (name) => {
     return `Welcome ${name}`
 }
 

 console.log(handleGreetingES("Zaree"))
 handleExit()
    
    function handleExit(name) {
      return ("Goodbye Jay");
    }
    
    var isLoggedIn = true;
    
    function onUserClick() {
      isLoggedIn = confirm("Are You logged in");
    if (isLoggedIn) {
        console.log(handleExit)
    } else {
        console.log(handleGreeting)
    }
    
    }
    
    // Skills Practice One

    // R1: Create a function with the alias handleGreeting. It should take a  parameter  called name and should return "Welcome" followed by the name.
    
    // R2: Create a function with the alias handleExit. It should take a paramter   called name and should return "Goodbye" followed by the name
    
    // R3 Create a variable called isLoggedin and set the value to true. Create a  function with the alias onUserClick, it should invoke the handleExit function with the string "Alexander" as the paramter if isLoggeddIn is true and invoke handleGreeting with the same paramter if isLoggedIn is false. 
    
    // R4: Rewrite onUserClick utilizing a terenary operator 
    
    
    
    // Skills Practice Two 
    
    // R1: assign an array of ten items consisting of srings and numbers which doest not contain empty strings or 0 values. You come up with the alias.
    
    // R2: Create a function that returns two arrays of strictly strings or strictly numbers from one array containing both.
    
    // R3: Create a function that takes two arrays as params (Parameters) and returns all the items in both arrays in reverse order -- See Array Reverse Methods 
    
    // Skills Practice Three
    
    // R1: Create an Object with the alias topic. It should have three properties called title, subtitle, desciption. Assign their values as "Javascript", "Functions" "A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again."
    
    
    // R2: Create a function with the alias createTopic. it should take 3 string params newTitle, newSubtitle, newDescription. The function should return an object with the props equal to the corresponding values passed in as paramters. -- Factory Function;
    
    const flipArr = (arrParam,scecondArr) => {
      console.log({firstArr, secondArr})
      let flippedArr = [];

        for(let i = 0; i <= firstArr.lenght -1; i++){
          flippedArr.push(firstArr[i])
        }

        for(let i = 0; i <= secondArr.lenght -1; i++){
          flippedArr.push(secondArr[i])
        }
        return flippedArr.reverse()
        console.log({flippedArr})
    }

flipArr(["one", "two", "three", "four"], ["do", "rey", "me", "fa"])
    
    
    
    
    
    
      // if its an array use []
      // if object use dot notation
      // R1: Write a function with the alias addQuestion that takes a string as a paramter. Return the orignial string if the last character is a question mark if it isnt return the string with a question mark at the end with one white space

   


// R2 Write a function  that takes a two strings as a paramters. The function should replace the word "failing" and replace it with "passing".The function should return first string concatonated with the second string. DO NOT USE THE + operator for this function. Utilize a String method.
    //  let updateGrade = (strOne, strTwo) => {
    // code logic here

    // }


// R3 For words that begin with consonant sounds, all letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added, as in the following examples:[2][3]

// "pig" = "igpay"
// "latin" = "atinlay"
// "banana" = "ananabay"
// "will" = "illway"
// "butler" = "utlerbay"
// "happy" = "appyhay"
// "duck" = "uckday"
// "me" = "emay"
// "bagel" = "agelbay"
// "history" = "istoryhay"

// STRING/ARRAY METHODS TO CHECKOUT: 
// Replace
// Concat
// Split
// CharAt
// indexOf