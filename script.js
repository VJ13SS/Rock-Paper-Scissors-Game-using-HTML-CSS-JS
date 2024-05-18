let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

let userscorehtml = document.querySelector("#user");
let compscorehtml = document.querySelector("#computer");

let msg = document.querySelector("#message");

let winner = document.querySelector("#winner");

//Adding event listener to each choice
choices.forEach((choice) =>{
  choice.addEventListener("click",() =>{
    let userchoice = choice.getAttribute("id");
    let compchoice = gencomputerchoice();
    winner.innerText = "";
    playgame(userchoice,compchoice);

    if((userscore === 5) ||(computerscore === 5)){
      winner.style.fontSize = "30px";
      if (userscore === 5){
        winner.innerText = "You win";
      }
      else{
        winner.innerText = "You lose Computer Won";
      }
      //Initialisig user and computer scores to 0
      userscore = 0;
      userscorehtml.innerText = userscore;
      computerscore = 0;
      compscorehtml.innerText = computerscore;
      msg.innerText = "Play Your move";
      msg.style.backgroundColor = "black";
    }
    })
  
});

//generating random computer choice
const gencomputerchoice = () =>{
  let options = ["rock", "paper","scissor"];//3 choices
  let random = Math.floor(Math.random() * 3);

  let compchoice = options[random];

  return compchoice;
};

//Draw function
const draw = () =>{
  msg.style.backgroundColor = "black";
  msg.innerText = "Draw";
};

//Main game function 
const playgame = (userchoice,compchoice) =>{
  if(userchoice === compchoice){
    draw();
  } else{
    let userwin = true;
    if(userchoice === "rock"){
      userwin = compchoice === "paper"? false:true;
showwinner(userwin,userchoice,compchoice);
    }
    else if(userchoice === "paper"){
      userwin = compchoice === "scissor"?false:true;
showwinner(userwin,userchoice,compchoice);
    }
    else{
      userwin = compchoice === "rock"?false:true;
showwinner(userwin,userchoice,compchoice);
    }
  }
};

//To show who is the winner in each round
const showwinner = (userwin,userchoice,compchoice) =>{
  if(userwin){
    userscore++;
    userscorehtml.innerText = userscore;
    msg.style.backgroundColor = "green";
    msg.innerText = `You: ${userchoice}  beats  Computer:${compchoice}`;
  }
  else{
    computerscore++;
    compscorehtml.innerText = computerscore;
    msg.style.backgroundColor = "red";
    msg.innerText = `Computer: ${compchoice}  beats   You:${userchoice}`;
  }
};