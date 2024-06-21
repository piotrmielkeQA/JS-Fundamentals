// First method to declare fucntion 

function showText() {
    console.log("Example text")
}

//showText();

// Second method to declare function 

const showText2 = function() {
    console.log("Example text from function 2 ")
}

// Third method to declare function

const showText3 = () => {
    console.log("Example text")
}


const name = "Piotr";
const age = 35;
const animal = "cat";

function returnText() {
    if(imie == "Piotr") {
        console.log("Name is Piotr")
    } else {
        console.log("Access is blocked!")
    }
}

returnText();

// // Parameters in fuction
// let firstNumber = 1;
// let secondNumber = 2;
// let sum; 

// console.log(sum);

// function addingNumbers() {
//     sum = firstNumber + secondNumber; 
// }

// addingNumbers();

// console.log(sum);

// Advanced fuction

function subtractingNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function addingNumbers(first, second) {
    const resultOfSubtracting = subtractingNumbers(5,1);
    return first + second + resultOfSubtracting;
}

console.log(addingNumbers(100, 100));


