"use strict";

// document.querySelector('.box').textContent='🐱'

const arr = [
  document.querySelector(".box1"),
  document.querySelector(".box2"),
  document.querySelector(".box3"),
  document.querySelector(".box4"),
  document.querySelector(".box5"),
  document.querySelector(".box6"),
  document.querySelector(".box7"),
  document.querySelector(".box8"),
  document.querySelector(".box9"),
];

console.log(arr);

let catIndex = Math.trunc(Math.random() * 9);

console.log(catIndex);

let box = document.querySelector("box");

let score = 7;
let highscore = 0;
document.querySelector(".highscore").textContent;

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    if (i === catIndex) {
      arr[i].textContent = "🐱";
      arr[i].style.backgroundColor = "rgb(51, 38, 24)";

      const tries = score;
      document.querySelector(".score").textContent = tries;

      document.querySelector(".wintext").textContent =
        "CONGRATULATIONS, YOU WON! 🎉";

      //set the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }



      //flip the other cards
    } else {
      score--;
      arr[i].textContent='X';

      document.querySelector(".score").textContent = score;
      
      
      if (score > 0) {
        document.querySelector(".wintext").textContent = "you're close..";
      } else if (score <= 0) {
        document.querySelector(".score").textContent = 0;
        document.querySelector(".wintext").textContent =
          "You lost the game dumbass.";
      }




    }
  });
}

document.querySelector(".again").addEventListener("click", function () {
  //reset the score
  score = 7;
  document.querySelector(".score").textContent = score;

  //remove the win text
  document.querySelector(".wintext").textContent =
    "start flipping the cards :)";

  //remove the found cat

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].textContent = "🐱")) {
      arr[i].textContent = "?";
      arr[i].style.backgroundColor = "#ffd8a8";
    }
  }

  //new cat index

  catIndex = Math.trunc(Math.random() * 9);

  console.log(catIndex);

});
