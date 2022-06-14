// VARIAVEIS DO PERSONAGEM
var personagem;
var velocidade; 
var positionX, positionY;
var eixoX, eixoY;

//VARIAVEIS COORDENADAS DOS OBSTACULOS
var obs1Coor, obs2Coor, obs3Coor, obs4Coor, obs5Coor;

function teclaUp() {
   var tecla = event.keyCode;
   // 37 = Esquerda | 38 = Cima | 39 = Direita | 40 = Baixo
   if (tecla == 37) {
      eixoX = 0;
      personagem.innerHTML = `<img src="assets/char/ash_esq.png">`
   } else if (tecla == 38) {
      eixoY = 0;
      personagem.innerHTML = `<img src="assets/char/ash_costas.png">`
   } else if (tecla == 39) {
      eixoX = 0;
      personagem.innerHTML = `<img src="assets/char/ash_dir.png">`
   } else if (tecla == 40) {
      eixoY = 0;
      personagem.innerHTML = `<img src="assets/char/ash_frente.png">`
   }
}

function teclaDown() {
   var tecla = event.keyCode;

   // 37 = Esquerda | 38 = Cima | 39 = Direita | 40 = Baixo
   if (tecla == 37) {
      validar_esquerda();
   } else if (tecla == 38) {
      validar_cima();
   } else if (tecla == 39) {
      validar_direita();
   } else if (tecla == 40) {
      validar_baixo();
   }
}

// Pega os ID das div obstaculo.
function obstaculo(){
   var obs1 = document.getElementById('obs1');
   var obs2 = document.getElementById('obs2');
   var obs3 = document.getElementById('obs3');
   var obs4 = document.getElementById('obs4');
   var obs5 = document.getElementById('obs5');

   // pega todas as informações de uma classe/ID do css
   obs1Coor = obs1.getBoundingClientRect();
   obs2Coor = obs2.getBoundingClientRect();
   obs3Coor = obs3.getBoundingClientRect();
   obs4Coor = obs4.getBoundingClientRect();
   obs5Coor = obs5.getBoundingClientRect();

   console.log(obs5Coor)
}

function validar_esquerda(){
   if(positionY >= obs2Coor.y - 20 && positionX <= obs2Coor.right + 10 ||
      positionX <= obs3Coor.x + 30){
      eixoX = 0; 
   }else{
      eixoX = -1;
      personagem.innerHTML = `<img src="assets/char/ash_esquerda_gif.gif">`
   }
}

function validar_cima(){
   if(positionY <= obs4Coor.y + 15){
      eixoY = 0
   }else{
      eixoY = -1;
      personagem.innerHTML = `<img src="assets/char/ash_costas_gif.gif">`
   }
}

function validar_direita(){
   if(positionY >= obs1Coor.y - 25 && positionX >= obs1Coor.x - 30 ||
      positionX >= obs5Coor.x - 30){
      eixoX = 0;
   }else{
      eixoX = 1;
      personagem.innerHTML = `<img src="assets/char/ash_direita_gif.gif">`
   }
}

function validar_baixo(){
   if(positionY >= obs1Coor.y - 30 && positionX >= obs1Coor.x - 30 ||
      positionY >= obs2Coor.y - 30 && positionX <= obs2Coor.right
      ){
      eixoY = 0;
   }else{
      eixoY = 1;
      personagem.innerHTML = `<img src="assets/char/ash_frente_gif.gif">`
   }
}
