// VARIAVEIS DO PERSONAGEM
var personagem;
var eixoX, eixoY, positionX, positionY;
var velocidade, tempo;

// VARIAVEIS DO POKEMON
var pokemonX, pokemonY;

function start() {
   //PERSONAGEM
   personagem = document.getElementById("personagem");
   eixoX = 0;
   eixoY = 0;
   positionX = 105;
   positionY = 360;
   velocidade = 0.5;

   // Tempo de FPS por seg (quanto menor for o num, mais linear fica a movimentação)
   tempo = setInterval(enterFrame, 1);

   //POKEMON
   pokemonX = 400;
   pokemonY = 40;

   document.addEventListener("keydown", teclaDown);
   document.addEventListener("keyup", teclaUp);
}

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
         eixoX = -1;
         personagem.innerHTML = `<img src="assets/char/ash_esquerda_gif.gif">`
      } else if (tecla == 38) {
         eixoY = -1;
         personagem.innerHTML = `<img src="assets/char/ash_costas_gif.gif">`
      } else if (tecla == 39) {
         eixoX = 1;
         personagem.innerHTML = `<img src="assets/char/ash_direita_gif.gif">`
      } else if (tecla == 40) {
         eixoY = 1;
         personagem.innerHTML = `<img src="assets/char/ash_frente_gif.gif">`
      }
}

function enterFrame() {
   positionX += eixoX * velocidade;
   positionY += eixoY * velocidade;
   personagem.style.left = positionX + "px";
   personagem.style.top = positionY + "px";

   pokemon.style.left = pokemonX + "px";
   pokemon.style.top = pokemonY + "px";

   verificarColisao();
}

function verificarColisao() {
   // var validar_eixoX = positionX == pokemonX - 100 || positionX == pokemonX + 50
   // var validar_eixoY = positionY == pokemonY - 100 || positionY == pokemonY + 50

   // var validar_eixoX = positionX > 250 && positionX < 400
   // var validar_eixoY = positionY > 250 && positionY < 400

   var validar_eixoX = positionX > pokemonX - 50 && positionX < pokemonX + 50;
   var validar_eixoY = positionY > pokemonY - 50 && positionY < pokemonY + 50;

   if (validar_eixoX && validar_eixoY) {
      console.log("!!!!Encostou!!!!");
   }
}

function brotarPokemon(){

   setInterval(() => {
      pokemonX = Math.floor(Math.random() * 600 + 1);
      pokemonY = Math.floor(Math.random() * 600 + 1);
      pokemon.style.left = pokemonX + "px";
      pokemon.style.top = pokemonY + "px";
   }, 5000);

}

window.addEventListener("load", start);
