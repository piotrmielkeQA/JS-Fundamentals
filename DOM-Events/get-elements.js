// First way to get elements - querySelector
const h2Band = document.querySelector("div#band h2.w3-wide");
const bandBox = document.querySelector("div#band");
const snapchatIcon = document.querySelector("footer i:nth-child(3)");
const div = document.querySelector("div");
console.log(h2Band);

// Second way to get elements - querySelectorAll
const div2 = document.querySelectorAll("div");

//Third way to get elements - getElementById
const soecialBtn = document.getElementsByClassName("special");

//Fourth way to get elements - getElementById
const navDemoElement = document.getElementById("navDemo");

//Fifth way to get elements - getElementsByTagName
const imgElement = document.getElementsByTagName("img");