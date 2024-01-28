'use strict';
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const cs0El=document.getElementById('current--0');
const cs1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
score0El.textContent=0;
score1El.textContent=0;
let activeplayer=0;
let curr=0;
let scores=[0,0];
let playing=true;
//const diceEl=document.querySelector('.dice');
diceEl.classList.add('hidden');
const switchPlayer=function()
{
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');//own logic
    curr=0;
    document.getElementById(`current--${activeplayer}`).textContent=curr;
    activeplayer=activeplayer===0? 1: 0;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');//own logic
}
//Rolling Dice
btnroll.addEventListener('click',function()
{   //console.log('Click');
   if(playing==true)
   {
    const dice=Math.trunc(Math.random()*6)+1;//roll dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    if(dice !=1)
    {
         curr+=dice;
         document.getElementById(`current--${activeplayer}`).textContent=curr;
    }
    else
    {
        //activeplayer=activeplayer===0? 1: 0;
        switchPlayer();
        //document.querySelector(`.player--${activeplayer}`).classList.toggle('player--active');
        
    }
  } 
})//Roll Operation
btnhold.addEventListener('click',function(){
  if(playing==true)
  {  
    scores[activeplayer]+=curr;
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
    if(scores[activeplayer]>=100)
    {
         playing=false;
         document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
         diceEl.classList.add('hidden');
    }
    else
    {
        switchPlayer();
    }
    //switchPlayer();
  }
})// Hold Operation
btnnew.addEventListener('click',function()
{
    playing=true;
    document.getElementById(`score--0`).textContent=0;
    document.getElementById(`score--1`).textContent=0;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    //document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    diceEl.classList.add('hidden');
    document.getElementById(`current--0`).textContent=0;
    document.getElementById(`current--1`).textContent=0;
    document.querySelector(`.player--0`).classList.add('player--active');
    activeplayer=0;
    curr=0;
    scores[0]=0;
    scores[1]=0;




})//Game Reset
