const btRock = document.getElementById("rock");
const btPaper = document.getElementById("paper");
const btScissor = document.getElementById("scissor");
const randomNumber = Math.floor(Math.random() * 3) + 1;


btRock.addEventListener("click", e => {
    document.getElementById("user").innerHTML = "You chose Rock";


    if(randomNumber == 1) {
        document.getElementById("comp").innerHTML = "Computer chose Rock";
        document.getElementById("final").innerHTML = "DRAW";
    }
    else if(randomNumber == 2) {
        document.getElementById("comp").innerHTML = "Computer chose Paper";
        document.getElementById("final").innerHTML = "YOU LOSE";
    }
    else {
        document.getElementById("comp").innerHTML = "Computer chose Scissor";
        document.getElementById("final").innerHTML = "YOU WIN";
    }
})
btPaper.addEventListener("click", e => {
    document.getElementById("user").innerHTML = "You chose Paper";


    if(randomNumber == 1) {
        document.getElementById("comp").innerHTML = "Computer chose Rock";
        document.getElementById("final").innerHTML = "You WIN";
    }
    else if(randomNumber == 2) {
        document.getElementById("comp").innerHTML = "Computer chose Paper";
        document.getElementById("final").innerHTML = "DRAW";
    }
    else {
        document.getElementById("comp").innerHTML = "Computer chose Scissor";
        document.getElementById("final").innerHTML = "You LOSE";
    }
})
btScissor.addEventListener("click", e=> {
    document.getElementById("user").innerHTML = "You chose Scissor";

    if(randomNumber == 1) {
        document.getElementById("comp").innerHTML = "Computer chose Rock";
        document.getElementById("final").innerHTML = "You LOSE";
    }
    else if(randomNumber == 2) {
        document.getElementById("comp").innerHTML = "Computer chose Paper";
        document.getElementById("final").innerHTML = "You WIN";
    }
    else {
        document.getElementById("comp").innerHTML = "Computer chose Scissor";
        document.getElementById("final").innerHTML = "DRAW";
    }
})