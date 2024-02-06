let boxes=document.querySelectorAll(".box1");
let restart=document.querySelector("#reset");
let winner_button=document.querySelector(".new");
let container=document.querySelector(".a");
let p=document.querySelector("p");
let turn=true;
const arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset=()=>{
    turn=true;
    enablebtn();
    container.classList.add("hide");
    
}
boxes.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn){
            box1.innerText="0";
            turn=false;
        }else{
            box1.innerText="X";
            turn=true;
        }
        box1.ariaDisabled=true;
        checkwinner();
    });
   
});
const disablebtn=()=>{
    for(let b of boxes){
        b.ariaDisabled=true;
    }
}
const enablebtn=()=>{
    for(let b of boxes){
        b.ariaDisabled=false;
        b.innerText=" ";
    }
}
const winner=(rank)=>{
    p.innerText=`Congratulations! the winner is ${rank}`;
    container.classList.remove("hide");
    disablebtn();
}
const checkwinner=()=>{
    for(let pattern of arr){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner");
                winner(pos1);
            }
        }

    }
}
winner_button.addEventListener("click",reset);
restart.addEventListener("click",reset);
