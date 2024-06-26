function showText() {
    console.log("Text")
}

setTimeout(showText, 5000) //1 second = 1000ms

const h2Element = document.querySelector("#band h2");
const colors = ["blue", "red", "yellow", "green", "pink"];

function changeColor() {
    const randomValue = Math.floor(Math.random() * ((colors.length - 1) - 0)) + 0;
    h2Element.style.color = colors[randomValue]
}

h2Element.addEventListener("click", function() {
    setTimeout(changeColor, 3000);
})