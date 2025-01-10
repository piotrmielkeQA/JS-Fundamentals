//Loops

// for(statement1; statement2; statement3) {

// }

// for loop (for i loop)
for(let i=0; i<5; i++){
    console.log('Hello World!' + i)
}


var car = ["Volvo", "Toyota", "Tesla"]
// for of loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.froEach( car => {
    console.log(car)
})