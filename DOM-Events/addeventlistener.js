const h2Band = document.querySelector("div#band h2");
const p = document.querySelector("p.w3-justify");
const buyTicketBtn = document.querySelector("#buy-ticket");
const FormContact = document.querySelector("form");
const link = document.querySelector(`div.w3-top div.w3-bar a[href="#contact"]`)
const inputName = document.querySelector(`input[name="Name"]`);


// Event click 

function showText() {
    console.log("Click on band nav!")
}
h2Band.addEventListener("click", showText)

// This
p.addEventListener("click", function() {
    console.log(p)
})

//Event
p.addEventListener("click", e => {
    if(e.clientX > 500) {
        console.log("Value is bigger than 500 and is equal: " + e.clientX )
    } else {
        console.log("Value is smaller than 500 and is equal: " + e.clientX )
    }
})

// Mouseover i mouseout
buyTicketBtn.addEventListener("mouseover", () => {
    console.log("CLICK!")
})

buyTicketBtn.addEventListener("mouseout", () => {
    console.log("CLICK! 2")
})

//PreventDefault
FormContact.addEventListener("submit", e => {
    e.preventDefault();
    console.log("TEST");
})

link.addEventListener("click", event => {
    event.preventDefault();
})

//Keydown, keyup
inputName.addEventListener("keydown", () =>
{
    console.log("Event keydown is working")
} )

inputName.addEventListener("keyup", () => {
    console.log("Event keyup is working")
})

//Scroll
window.addEventListener("scroll", e => {
    console.log(window.scrollY)
})

//Execute event after DOM Content was loaded
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM was downloaded")
})