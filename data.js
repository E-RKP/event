const numerino = document.getElementById('numerino')
const numerone = document.getElementById ('numerone')
const diminuire = document.getElementById ('diminuire')
const aggiungere = document.getElementById('aggiungere')
const azzera = document.getElementById('azzera')
let counterN = 0
let counternu = 0

function counterp (){
 
  counterN++;
  counternu++;

  return {

    counterN,
    counternu
  };
}

function counterm (){

  counterN--;
  counternu++;

  if (counterN < 0){
    counterN = 0
  }

  return {
    counterN,
    counternu
  };
}

function azzeratutto (){

  counterN = 0
  counternu = 0
}

diminuire.addEventListener('click', ()=>{

  counterm();
  numerone.innerHTML = counterN
  numerino.innerHTML = counternu
})

aggiungere.addEventListener('click', ()=>{

  counterp();
  numerone.innerHTML = counterN
  numerino.innerHTML = counternu
})

azzera.addEventListener('click', ()=>{

  azzeratutto();
  numerone.innerHTML = counterN
  numerino.innerHTML = counternu
  
})


const clicca = document.getElementById('clicca')
const box = document.querySelector ('input')

clicca.onclick = function (){

  clicca.innerHTML = 'ciao'
  console.log('ciao')
}

box.onfocus = function (){

  
  console.log('let s go')
}

box.onfocus = function (lol){

  console.log('ciao')
}

box.addEventListener('focus', function (lol){
  console.log(lol)
})

const sub = document.getElementById ('submit')
const nascostoo = document.getElementById ('nascosto')

sub.onform = function submit (e){

  if (e.value === ''){
    e.preventDefault();
    nascostoo.textContent ('svegliaaaa')

  }
}


const cliqq = document.getElementById('qui')
const pove = document.getElementById('poverino')



cliqq.onclick = function apparizione(){
  console.log('ciao')
  pove.textContent = 'svegliaaa'
}

const nascondiglio = document.getElementById('nascondiglio')
const cliccare = document.getElementById('here')
const cambiofrase = document.getElementById('lullemon')

function miracolo (){

  cambiofrase.textContent = 'eccoci'
  
}

cliccare.addEventListener ('click', ()=>{
  miracolo();
})