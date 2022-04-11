const btRock = document.getElementById("rock");
const btPaper = document.getElementById("paper");
const btScissor = document.getElementById("scissor");



btRock.addEventListener("click", e => {
    document.getElementById("user").innerHTML = "You chose Rock";
    const randomNumber = Math.floor(Math.random() * 3) + 1;

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
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1) {
        document.getElementById("comp").innerHTML = "Computer chose Rock";
        document.getElementById("final").innerHTML = "YOU WIN";
    }
    else if(randomNumber == 2) {
        document.getElementById("comp").innerHTML = "Computer chose Paper";
        document.getElementById("final").innerHTML = "DRAW";
    }
    else {
        document.getElementById("comp").innerHTML = "Computer chose Scissor";
        document.getElementById("final").innerHTML = "YOU LOSE";
    }
})
btScissor.addEventListener("click", e=> {
    document.getElementById("user").innerHTML = "You chose Scissor";
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1) {
        document.getElementById("comp").innerHTML = "Computer chose Rock";
        document.getElementById("final").innerHTML = "YOU LOSE";
    }
    else if(randomNumber == 2) {
        document.getElementById("comp").innerHTML = "Computer chose Paper";
        document.getElementById("final").innerHTML = "YOU WIN";
    }
    else {
        document.getElementById("comp").innerHTML = "Computer chose Scissor";
        document.getElementById("final").innerHTML = "DRAW";
    }
})
const rel = document.getElementById("rst");
rel.addEventListener("click", e=> {
    location.reload();
})