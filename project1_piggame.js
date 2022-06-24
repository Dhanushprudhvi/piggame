var current_value;
var active;
var start;
var players; 
// if gamecompleted or clicks new game then it should start from first;
function startgame()
{
    current_value=0;
    active=1;
    start=false;
    players=[0,0];
    document.querySelector('.player1_score').textContent=0;
    document.querySelector('.player2_score').textContent=0;
    document.querySelector('.player1_curr_value').textContent=0;
    document.querySelector('.player2_curr_value').textContent=0;
    document.querySelector('.player1_box').classList.add('active');
    document.querySelector('.player2_box').classList.remove('active');
    document.querySelector('.dice').classList.add('hidden');
    
}
startgame();
document.querySelector('.roll_btn').addEventListener('click',function(){
    if(!start)
    {
    document.querySelector('.dice').classList.remove('hidden');
   random_value=Math.ceil(Math.random()*6);
   document.querySelector('.dice').src=`dice-${random_value}.png`;
   if(random_value!=1)
   {
      //if value!=1 --> add to current value and change current active player current value;
      current_value+=random_value;
      document.querySelector(`.player${active}_curr_value`).textContent=current_value;
   }
   else{
    //if value==1 -->currvalue=0,active player current value =0,change active,
    document.querySelector('.player1_box').classList.toggle('active');
    document.querySelector('.player2_box').classList.toggle('active');
       current_value=0;
       document.querySelector(`.player${active}_curr_value`).textContent=0;
       active= active===1? 2:1;
   }
}

});
document.querySelector('.hold_btn').addEventListener('click',function(){
    // when hold clicks currvalue of curr player update into  active player score;
    if(!start)
    {
    players[active-1]+=current_value;
    document.querySelector(`.player${active}_score`).textContent=players[active-1];
    current_value=0;
    document.querySelector(`.player${active}_curr_value`).textContent=0;
    document.querySelector('.player1_box').classList.toggle('active');
    document.querySelector('.player2_box').classList.toggle('active');
    if(players[active-1]>=20)
    {
        //display winner if active players score>=100;
        document.querySelector('.player1_box').classList.remove('active');
        document.querySelector('.player2_box').classList.remove('active');
        start=true;
        document.querySelector(`.player${active}_box`).classList.add('winner');
        document.querySelector(`.player${active}_title`).style.color='white';
        document.querySelector(`.player${active}_title`).textContent="Yahoo winner🥇";
        document.querySelector('.dice').classList.add('hidden');
    }
    active= active===1? 2:1;
}
    
});
document.querySelector('.new_btn').addEventListener('click',function(){
    document.querySelector('.player1_title').textContent="PLAYER 1";
    document.querySelector('.player2_title').textContent="PLAYER 2";
    document.querySelector(`.player1_box`).classList.remove('winner');
    document.querySelector(`.player1_title`).style.color='black';
    document.querySelector(`.player2_box`).classList.remove('winner');
        document.querySelector(`.player2_title`).style.color='black';
        startgame();
});