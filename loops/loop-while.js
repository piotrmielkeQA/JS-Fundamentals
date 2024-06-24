//first example
let count = 0;
const names = ["Alicja", "Rafał", "Katarzyna", "Robert"]

while(count >= 5) {
    console.log("TEST");
    count ++;
}

//second example 
while(count < names.length) {
    console.log(names[count]);
    count ++;
}

//third example
while(names[count] !== "Katarzyna") {
    console.log(names[count]);
    count ++;
}