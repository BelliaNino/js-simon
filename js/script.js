console.log('it works');

const countdownEl = document.getElementById('countdown')//countdown

const instrEl = document.getElementById('instructions')//Istruzioni del gioco

const numListEl = document.getElementById('numbers-list')//lista dei numeri casuali 

const formEl = document.getElementById('answers-form')//input per l'utente

const btnEl = document.querySelector('.btn')//btn per verificare esito

const esiText = document.getElementById('message')//mess esito


function randomNum() {
  let num = [];

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 50) + 1;
    num.push(random);
  }

  return num;
}

const numbers = randomNum()
numListEl.innerHTML = " "

for (let i = 0; i < numbers.length; i++){
  numListEl.innerHTML += `<li>${numbers[i]}</li>`
}







