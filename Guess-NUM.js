let max = Number(prompt ("Enter Any MAXIMUM Number🎲"));
let random = Math.floor(Math.random() * max) +1;
let Guess = prompt("Guess the number");

while(true){
    if(Guess== "Quit") {
        console.log("You Quit the game🔚. Thank You for playing!!✨");
        break;
    }
    else if(Guess == random) {
        console.log(`Congrats!!! ${random} is the right guess!!🎉🥳🎊✨`);
        break;
    }
    else if (Guess<random) {
        Guess = prompt("Hint: 💡📈 Too low! Try a higher number! 🚀🎯");
    }
    else {
        Guess = prompt("Hint:💡📈 Too high! Try a smaller number! 🚀🎯 ");
    }
}
