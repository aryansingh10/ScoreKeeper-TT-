const P1Display=document.querySelector('#P1Display');
const P2Display=document.querySelector('#P2Display');
const Reset=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#isGameof');
const P1Button=document.querySelector('#P1Button');
const P2Button=document.querySelector('#P2Button');
let P1score=0;
let P2score=0;
let winningScore=1;
let isGameover=false;
P1Button.addEventListener('click',()=>{
    if (!isGameover) {
    P1score=P1score+1
    
    if (P1score===winningScore) {
        isGameover=true
        P1Display.classList.add('winner')
        P2Display.classList.add('loser')
        P1Button.disabled=true;
        P2Button.disabled=true;
        
        
    }
    P1Display.textContent=P1score
}
})

P2Button.addEventListener('click',()=>{
    if (!isGameover) {
    P2score=P2score+1
    
    if (P2score===winningScore) {
        isGameover=true
        P2Display.classList.add('winner')
        P1Display.classList.add('loser')
        P1Button.disabled=true;
        P2Button.disabled=true;
        
        
    }
    P2Display.textContent=P2score
}
})
winningScoreSelect.addEventListener('change',function(params) {
    winningScore=parseInt(this.value);
    ResetGame();
    
})
Reset.addEventListener('click',ResetGame)
    // isGameover=false;
    // P1score=0
    // P2score=0
    // P1Display.textContent=P1score
    // P2Display.textContent=P2score

function ResetGame(){
    isGameover=false;
    P1score=0
    P2score=0
    P1Display.textContent=P1score
    P2Display.textContent=P2score
    P1Display.classList.remove("winner","loser")
    P2Display.classList.remove("winner","loser")
    P1Button.disabled=false;
        P2Button.disabled=false;
        
    
}