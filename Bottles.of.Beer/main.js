let beerNum = prompt("Pick a number!");

let takeOneBtn = document.getElementById("takeOneBtn");
let startingLine = document.getElementById("startingLine");
let newLine = document.getElementById("newLine");

startingLine.textContent = `${beerNum} bottles of Beer on the wall!`;


takeOneBtn.addEventListener("click", function () {
  if (beerNum > 1) {
    beerNum--;
  newLine.textContent = `Pass it around! ${beerNum} bottles of Beer on the wall!`;
  }
  else {
   newLine.textContent = `You drank all that?? Boy! Someone needs AA!`; 
  }
});

/*
function alcoholism() {
  if (beerNum == 0) {
    newLine.textContent = `0 bottles?? Looks like someone is an alcoholic!`;
  }
}
alcoholism();
*/
/*
function takeOneDown() {
  if (beerNum == 0) {
    
  } else {
    beerNum--;
    newLine.textContent = `Pass it around! ${beerNum} bottles of Beer on the wall!`;
  }
}

takeOneBtn.addEventListener("click", takeOneDown());
*/

