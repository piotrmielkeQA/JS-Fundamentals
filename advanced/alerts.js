const h2Element = document.querySelector("#band h2");

function executeAlert() {
    //Information alert
    alert("Alert");
}

function executeAlert2() {
    //Confirm alert
    if(confirm("Do you accept agreement?")) {
        console.log("User accepted agreement")
    } else {
        console.log("User rejected agreement")
    }
    
}

function executeAlert3() {
    const userName = prompt("What your name?\nkdfgkfdjg", "Please provide name..");
    console.log("User name is " + userName);
}

h2Element.addEventListener("click", executeAlert3);