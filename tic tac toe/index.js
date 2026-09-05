let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let turn0 = true ;    //palyerX, playerY

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
         if(turn0){
          box.innerText = "0"; //player 0
          turn0 =false;
         }else{
          box.innerText = "X"; //player x
          turn0 = true;
         }
         box.disabled = true;

         checkWinner();
      });
});

const checkWinner = () => {
  for(pattern of winPatterns){
    console.log(pattern[0] ,pattern[1] ,pattern[2]);
    console.log(boxes[pattern[0]] ,boxes[pattern[1]] ,boxes[pattern[2]]);
  }
};