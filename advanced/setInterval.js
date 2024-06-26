let count = 0;

function showText() {
    count++;
    if(count === 8) {
        clearInterval(start)
    } 
        console.log("Test")
    
}

const start = setInterval(showText, 200);