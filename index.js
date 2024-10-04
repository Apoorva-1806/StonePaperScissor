//Changing the image of first dice
var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomDiceImage1 = "../StonePaperScissor/images/rpc" + randomNumber1 + ".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomDiceImage1);


//Changing the image of second dice
var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var randomDiceImage2 = "../StonePaperScissor/images/rpc" + randomNumber2 + ".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src",randomDiceImage2);


//Changing headign according to the winner
if(randomNumber1 == 1 && randomNumber2 == 2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 == 1 && randomNumber2 == 3) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else if (randomNumber1 == 1 && randomNumber2 == 3) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else if (randomNumber1 == 2 && randomNumber2 == 1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else if (randomNumber1 == 2 && randomNumber2 == 3) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 == 3 && randomNumber2 == 1) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 == 3 && randomNumber2 == 2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

const roll = document.getElementById("newRoll");
roll.addEventListener("click", function() {
    location.reload();
})