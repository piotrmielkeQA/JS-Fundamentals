const h2Element = document.querySelector("div#band h2.w3-wide");
const navbar = document.querySelector("div.w3-bar");

let switchVariable = false;

h2Element.addEventListener("click", function() {
    //Change color h2 to red
    if(switchVariable === false) {
        this.style.color = "red";
        this.style.fontSize = "56px";
        switchVariable = !switchVariable;
    } else {
        this.style.color = "black";
        this.style.fontSize = "22px";
    }
    
})


window.addEventListener("scroll", () => {
    if(window.scrollY > 350) {
        navbar.style.background = "blue";
    } else {
        navbar.style.background = "black";
    }
})