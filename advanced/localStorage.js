//save to  localStorage
localStorage.setItem("title", "Super Gra komputerowa")
localStorage.setItem("score", "24")
localStorage.setItem("name", "Steve")
localStorage.setItem("rank", "Silver")


//reading element from Local Storage
const titleGame = localStorage.getItem("title");

//remove elements from Local Storage
localStorage.removeItem("title")

//Remove all elements from Local Storage 
if(confirm("Czy na pewno chcesz usunąć dane?")) {
    localStorage.clear();
    alert("Udało się wyczyścić dane")
} else {
    alert("Nie udało się wyczyścić danych")
}
