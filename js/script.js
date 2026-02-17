const countdownEl = document.getElementById('countdown')//countdown
const instrEl = document.getElementById('instructions')//Istruzioni del gioco
const numListEl = document.getElementById('numbers-list')//lista dei numeri casuali 
const formEl = document.getElementById('answers-form')//input per l'utente
const btnEl = document.querySelector('.btn')//btn per verificare esito
const esiText = document.getElementById('message')//mess esito

const user = document.querySelectorAll('.form-control')

let timer = 30//countdounw

//creare una funzione per generare 5 numeri casuali
function randomNum() {
  let num = [];

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 50) + 1;
    num.push(random);
  }

  return num;
}

const numbers = randomNum()
console.log(numbers);

numListEl.innerHTML = " "

//inserire i 5 numeri casuali nella lista e stamparli in pagina
for (let i = 0; i < numbers.length; i++) {
  numListEl.innerHTML += `<li>${numbers[i]}</li>`
}

//settare il countdown
const intervalloId = setInterval(function () {

  timer--
  if (timer === -1) {
    clearInterval(intervalloId)
    numListEl.classList.add('d-none');
    formEl.classList.remove('d-none')


  } else {
    countdownEl.innerHTML = timer;
  }


  console.log(timer);

}, 1000)


//inserire i numeri utenti in un array

btnEl.addEventListener('click', function (e) {
  e.preventDefault()
  let userInput = []

  for (let i = 0; i < user.length; i++) {
    userInput.push(parseInt(user[i].value));
  }

  // Utilizzo un ciclo dentro un altro ciclo per confrontare i numeri delle due array in tutte le posizioni
  // mi aiuto con count per tenere traccia di quante volte ho trovato una corrispondenza

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < userInput.length; j++) {
      if (numbers[i] === userInput[j]) {
        count++;
        break;
      }
    }
  }

  esiText.innerHTML = `Hai indovinato, ${count}, numeri!`;
});



