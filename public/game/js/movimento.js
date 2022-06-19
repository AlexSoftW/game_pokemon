// VARIAVEIS DO PERSONAGEM
var personagem;
var velocidade; 
var positionX, positionY;
var eixoX, eixoY;

// VARIAVEIS DAS COORDENADAS DOS OBSTACULOS
var obs1Coor, obs2Coor, obs3Coor, obs4Coor, obs5Coor,
      obs6Coor, obs7Coor, obs9Coor, obs10Coor, 
         obs11Coor;

// VARIAVEIS DE VALIDAÇÃO[Clicar em 2 tecla ao msm tempo]
var pressEsq = 0;
var pressUp = 0;
var pressDir = 0;
var pressBaixo = 0;

// VALIDAR SE CLICAR EM 2 TECLAS AO MSM TEMPO
setInterval(() => {
   if(pressUp == 1 && pressEsq == 1 || pressUp == 1 && pressDir == 1 || 
      pressBaixo == 1 && pressDir == 1 || pressBaixo == 1 && pressEsq == 1 ||
      pressDir == 1 && pressEsq == 1 || pressUp == 1 && pressBaixo == 1){
      eixoX = 0;
      eixoY = 0;
   }
}, 1);

function voltar_home(){
   if(positionX >= 310 && positionX <= 355 && positionY > 620){
      console.log('saiu')
      window.location = '../index.html'
   }
}

function teclaUp() {
   var tecla = event.keyCode;
   // 37 = Esquerda | 38 = Cima | 39 = Direita | 40 = Baixo
   if (tecla == 37) {
      eixoX = 0;
      pressEsq = 0
      personagem.innerHTML = `<img src="assets/char/ash_esq.png">`
   } else if (tecla == 38) {
      eixoY = 0;
      pressUp = 0
      personagem.innerHTML = `<img src="assets/char/ash_costas.png">`
   } else if (tecla == 39) {
      eixoX = 0;
      pressDir = 0
      personagem.innerHTML = `<img src="assets/char/ash_dir.png">`
   } else if (tecla == 40) {
      eixoY = 0;
      pressBaixo = 0;
      personagem.innerHTML = `<img src="assets/char/ash_frente.png">`
   }
}

function teclaDown() {
   var tecla = event.keyCode;

   // 37 = Esquerda | 38 = Cima | 39 = Direita | 40 = Baixo
   if (tecla == 37) {
      pressEsq = 1;
      validar_esquerda();
   } else if (tecla == 38) {
      pressUp = 1;
      validar_cima();
   } else if (tecla == 39) {
      pressDir = 1;
      validar_direita();
   } else if (tecla == 40) {
      pressBaixo = 1;
      validar_baixo();
      voltar_home();
   }
}

// Pega os ID das div obstaculo.
function obstaculo(){
   var obs1 = document.getElementById('obs1');
   var obs2 = document.getElementById('obs2');
   var obs3 = document.getElementById('obs3');
   var obs4 = document.getElementById('obs4');
   var obs5 = document.getElementById('obs5');
   var obs6 = document.getElementById('obs6');
   var obs7 = document.getElementById('obs7');
   var obs9 = document.getElementById('obs9');
   var obs10 = document.getElementById('obs10');
   var obs11 = document.getElementById('obs11');

   // pega todas as informações de uma classe/ID do css
   obs1Coor = obs1.getBoundingClientRect();
   obs2Coor = obs2.getBoundingClientRect();
   obs3Coor = obs3.getBoundingClientRect();
   obs4Coor = obs4.getBoundingClientRect();
   obs5Coor = obs5.getBoundingClientRect();
   obs6Coor = obs6.getBoundingClientRect();
   obs7Coor = obs7.getBoundingClientRect();
   obs9Coor = obs9.getBoundingClientRect();
   obs10Coor = obs10.getBoundingClientRect();
   obs11Coor = obs11.getBoundingClientRect();

   console.log(obs2Coor); 
}

function validar_esquerda(){
   if(positionX <= obs1Coor.x + 30 ||
      positionX <= obs11Coor.x + 60 && positionY >= obs11Coor.y - 30 &&
      positionX >= obs11Coor.x + 15 ||
      positionX <= obs6Coor.x + 220 && positionY >= obs6Coor.y - 20 ||
      positionX <= obs7Coor.x + 120 && positionY >= obs7Coor.y - 30 &&
      positionY <= obs7Coor.y + 150 ||
      positionX >= obs9Coor.x + 20 && positionX <= obs9Coor.x + 190 &&
      positionY >= obs9Coor.y - 5 && positionY <= obs9Coor.y + 150){
      eixoX = 0; 
   }else{
      eixoX = -1;
      personagem.innerHTML = `<img src="assets/char/ash_esquerda_gif.gif">`
   }
}

function validar_cima(){
   if(positionY <= obs2Coor.x + 30 ||
      positionY <= obs10Coor.y + 110 && positionX >= obs10Coor.x - 20 ||
      positionY <= obs7Coor.y + 160 && positionX <= + 160 &&
      positionY >= obs7Coor.y - 20 ||
      positionX >= obs9Coor.x - 25 && positionX <= obs9Coor.x + 160 &&
      positionY >= obs9Coor.y + 20 && positionY <= obs9Coor.y + 160){
      eixoY = 0;
      personagem.innerHTML = `<img src="assets/char/ash_costas.png">`
   }else{
      eixoY = -1;
      personagem.innerHTML = `<img src="assets/char/ash_costas_gif.gif">`
   }
}

function validar_direita(){
   if(positionX > obs3Coor.x - 30 ||
      positionX >= obs10Coor.x - 25 && positionY <= obs10Coor.y + 100 ||
      positionX >= obs11Coor.x - 25 && positionY >= obs11Coor.y - 30 &&
      positionX <= obs11Coor.x + 20 ||
      positionX >= obs5Coor.x - 30 && positionY >= obs5Coor.y - 20 ||
      positionX >= obs9Coor.x - 35 && positionX <= obs9Coor.x + 120 &&
      positionY >= obs9Coor.y - 20 && positionY <= obs9Coor.y + 150){
      eixoX = 0;
      personagem.innerHTML = `<img src="assets/char/ash_dir.png">`
   }else{
      eixoX = 1;
      personagem.innerHTML = `<img src="assets/char/ash_direita_gif.gif">`
   }
}

function validar_baixo(){
   if(positionY > obs4Coor.y - 45 && positionX > obs4Coor.x ||
      positionY >= obs5Coor.y - 30 && positionX > obs5Coor.x - 25 ||
      positionY >= obs6Coor.y - 30 && positionX < obs6Coor.x + 220 ||
      positionX <= obs7Coor.x + 110 && positionY >= obs7Coor.y - 40 &&
      positionY <= obs7Coor.y + 140 ||
      positionX >= obs9Coor.x - 20 && positionX <= obs9Coor.x + 160 &&
      positionY >= obs9Coor.y - 40 && positionY <= obs9Coor.y + 110){
      eixoY = 0;
      personagem.innerHTML = `<img src="assets/char/ash_frente.png">`
   }else{
      eixoY = 1;
      personagem.innerHTML = `<img src="assets/char/ash_frente_gif.gif">`
   }
}

