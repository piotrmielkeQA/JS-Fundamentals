const boxBand = document.querySelector("div#band");

const p = document.createElement("p");
const link = document.createElement("a");

p.innerText = "New paragraph";
link.innerText = "Redirected to Google.com";


//Adding class
p.classList.add("active");
p.classList.add("active2");

// Remove class
p.classList.remove("active");

// Set attribute
link.setAttribute("href", "https://google.com")
link.removeAttribute("href");

link.id = "new-link"

boxBand.appendChild(p)
boxBand.appendChild(link);



