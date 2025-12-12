let userCount = 0;
let comCount = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#userCount");
const computer = document.querySelector("#comCount");

const RandomChoice = () => {
    const arr = ["Rock", "Paper", "Scissor"];
    let p = Math.floor(Math.random() * 3);
    const comChoice = arr[p];
    return (comChoice);
};
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        msg.innerText = `Congratulations, You win! Your ${userChoice} beats ${comChoice}`;
        userCount++;
        user.innerText = userCount;
        msg.style.color = "rgba(152, 244, 137, 1)";

    }
    else {
        msg.innerText = `Sorry, You lost. ${comChoice} beats your ${userChoice}`;
        comCount++;
        computer.innerText = comCount;
        msg.style.color = "rgba(250, 94, 91, 1)";
    }
};
const GameDraw = () => {
    msg.innerText = "Game was Draw, Play again!"
    msg.style.color = "rgba(236, 185, 66, 1)";
};

const playGame = (userChoice) => {
    const comChoice = RandomChoice();
    if (userChoice === comChoice) {
        GameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = comChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = comChoice === "Scissor" ? false : true;
        }
        else {
            userWin = comChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});