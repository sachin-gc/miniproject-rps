let userscore = document.querySelector("#msggg");
let comscore = document.querySelector("#msgg");
let us = 0;
let cs = 0;
const choices = document.querySelectorAll(".choice");
const paragr = document.querySelector("#msg");
const winMessage = document.getElementById('win');

const generatecomchoices = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const drawgame = () => {
    paragr.innerText = "Draw";
    paragr.style.backgroundColor = "black";
};

const showWinner = () => {
    if (us === 10) {
        winMessage.innerText = "You win the game!";
        document.body.style.backgroundColor = "green";
        winMessage.style.fontSize = "24px"; 
    } else if (cs === 10) {
        winMessage.innerText = "Computer wins the game!";
        document.body.style.backgroundColor = "red";
        winMessage.style.fontSize = "24px"; 
    } else if (us === 5 && cs === 5) {
        winMessage.innerText = "It's a draw!";
        document.body.style.backgroundColor = "white"; 
        winMessage.style.fontSize = "24px"; 
    }
};

const playgame = (userchoice) => {
    const compchoices = generatecomchoices();
    if (userchoice === compchoices) {
        drawgame();
    } else {
        let userwin;
        if (userchoice === "rock") {
            userwin = compchoices === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoices === "scissors" ? false : true;
        } else {
            userwin = compchoices === "rock" ? false : true;
        }
        if (userwin) {
            ++us;
            userscore.innerText = us;
            paragr.innerText = `${userchoice} beats ${compchoices}`;
            paragr.style.backgroundColor = "green";
        } else {
            ++cs;
            comscore.innerText = cs;
            paragr.innerText = `${compchoices} beats ${userchoice}`;
            paragr.style.backgroundColor = "red";
        }
        showWinner();
    }
};

choices.forEach((choice) => {
    const userchoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playgame(userchoice);
    });
});
