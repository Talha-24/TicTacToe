// let boxes=document.querySelectorAll(".box");
// let resetbtn=document.querySelector(".resetbtn");
// //Now I am using a turn variable which will controls the turns of players
// let turn="true";
// //Now I am defining the winPatterns
// const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// boxes.forEach((box) =>{ //Till there I have accessed all of the boxes one by one
//     box.addEventListener("click",()=>{ //There, I have added the event listener on every single box(On all of the boxes)
//       console.log("Box is Clicked");   
//       if(turn=="true"){
//         box.innerText="X";
//         turn="false";
//       }   
//       else{
//         box.innerText="O";
//         turn="true";
//       } 
//       box.disabled=true;
//     })
// // })






let player1=prompt("Enter the Name of Player One ");
let player2=prompt("Enter the Name of Player 2");
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let gamemessage=document.querySelector(".game-message");
let msg=document.querySelector("#msg");
let msgt=document.querySelector("#msgt");
let startbtn=document.querySelector("#startbtn");
let msgtt=document.querySelector("#msgtt");
let turn="true";
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("Box");
        if(turn=="true"){
            box.innerText="X";
            turn="false";
        }
        else{
            box.innerText="O";
            turn="true";
        }
        box.disabled="true";
        checkWinner();
        winmsg();
       
    })
});


//User Defined Functions
//Winning Pattern,To Show the Winner
const checkWinner=()=>{for(let pattern of winPatterns){
    let positionOneValue= boxes[pattern[0]].innerHTML;
    let positionTwoValue= boxes[pattern[1]].innerHTML;
    let positionThreeValue= boxes[pattern[2]].innerHTML;
    if(positionOneValue != "" && positionTwoValue != "" && positionThreeValue != ""){
        if(positionOneValue===positionTwoValue && positionOneValue===positionThreeValue){
            console.log(" Winner : ", positionOneValue);
            msgtt.innerText=` Winner is : ${positionOneValue}`;
           
            disableButtons();
            if(positionOneValue=="X"){
                msgtt.innerText=`Winner is : ${player1}`;
                playgamewinsound();

            } 
            if(positionOneValue=="O"){
                msgtt.innerText=`Winner is : ${player2}`;
                playgamewinsound();
            }  
        }
    }
}}
//Function to Disable the button after selection of winner
const disableButtons=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//Function to Enable the Buttons after pressing the start Game Button
const enableButton=()=>{
    for(let box of boxes){
        box.disabled=false;
        playgamestart();
        
    }
   
}
//Function to Reset the Game , to remove all of the data on boxes
const resetButton=()=>{
    for(box of boxes){
        box.innerText="";
    }
}
//I am accessing the reset button to clear all of the content within the buttons 
resetbtn.addEventListener("click",resetButton);
startbtn.addEventListener("click",enableButton);

//Function to Show the Winner;
const winmsg=()=>{
    msg.innerText=`Name of Player One :  ${player1}  (X)`;
   msgt.innerText=`Name of Player Two :  ${player2}  (O)`;
  
   
}
let gamewin= new Audio("Winsound.mp3");
function playgamewinsound(){
    gamewin.play();
    gamewin.currentTime=1;
}

let gamestart=new Audio("gamestart.mp3");
function playgamestart(){
    gamestart.play();
    gamestart.currenTime=1;
}

















