const form = document.querySelector("form");
const boxBand = document.querySelector("div#band");


//Creating new element
const divElement = document.createElement("div");
divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.backgroundColor = "red";

const p = documnt.createElement("p");
p.innerText = "New parapgh";

console.log(divElement)
console.log(p)

// Adding element to HTML (DOM)
form.appendChild(divElement)
boxBand.appendChild(p)