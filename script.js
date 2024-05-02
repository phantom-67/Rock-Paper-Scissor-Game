var userscore=0;
var compscore=0;

const choices = document.querySelectorAll(".option");

function compChoice(arr){

    var randIdx = Math.floor(Math.random()*3);
    return arr[randIdx];
}

function printMessage(result){
    var message = document.querySelector(".spin");
    message.innerText=result;
    if(result==="You Win"){
        message.style.backgroundColor="green";
    }
    else if(result==="Computer Win"){
        message.style.backgroundColor="red";
    }
    else{
        message.style.backgroundColor="black";
    }
}

function drawGame(){
    console.log("Game draw.")
    printMessage("Draw!");
}

function winner(userWin){

    if(userWin){
        console.log("You Win");
        userscore++;
        document.getElementById("user-score").innerText = userscore;
        printMessage("You Win")

    }else{
        console.log("Computer Win");
        compscore++;
        document.getElementById("comp-score").innerText = compscore;
        printMessage("Computer Win")
    }
}
 
function playGame(userChoice){
    arr = ["rock","paper","scissor"];
    var computerChoice=compChoice(arr);
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice==="rock"){
            userWin = computerChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin = computerChoice==="scissor" ? false:true;
        }
        else {
            userWin = compChoice==="rock" ? false:true;
        }
        winner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        var userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});