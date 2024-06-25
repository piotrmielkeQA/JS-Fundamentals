const names = ["Alicja", "Tomasz", "Agnieszka", "Beata", "Rafał", "Klaudiusz"]
const numbers = [24, 63, 41, 42, 68, 85]


numbers.map(number => {
    if(number > 41) {
        console.log(`Number ${number} is bigger than 41`)
    } else {
        console.log(`Number ${number} is smaller or equal than 41`)
    }
})