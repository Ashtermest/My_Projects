let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const drawGame = () =>{
    msg.innerText = "It's a draw, Play Again";
    msg.style.backgroundColor = "#111D13";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "#A1CCA5";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "#db504a";
    }
}; 
const playGame = (userChoice) => {
    console.log("user-choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp-choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice ==="paper" ? false: true;
        }else if(userChoice ==="paper"){
            //rock,scissors
            userWin = compChoice ==="scissors" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});