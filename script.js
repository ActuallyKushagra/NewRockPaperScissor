const btRock = document.getElementById("rock");
const btPaper = document.getElementById("paper");
const btScissor = document.getElementById("scissor");
let randomNumber = Math.floor(Math.random() * 3) + 1;


btRock.addEventListener("click", e => {
    document.getElementById("user").innerHTML = "Rock chosen";
    if(randomNumber == 1) {
        document.getElementById("comp").innerHTML = "Computer chose rock";
    }
    else if(randomNumber == 2) {
        document.getElementById("comp").innerHTML = "Computer chose paper";
    }
    else {
        document.getElementById("comp").innerHTML = "Computer chose scissor";
    }
})