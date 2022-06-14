//Frames por seg(FPS)
var frame;

function start() {
   //PERSONAGEM
   personagem = document.getElementById("personagem");
   eixoX = 0;
   eixoY = 0;
   positionX = 115;
   positionY = 370;
   velocidade = 0.5;

   //POKEMON
   pokemonX = 410;
   pokemonY = 50;

   //MOVIMENTAÇÃO
   document.addEventListener("keydown", teclaDown);
   document.addEventListener("keyup", teclaUp);

   // Tempo de Frames por seg (FPS = quanto menor for o num, mais linear fica a movimentação)
   frame = setInterval(enterFrame, 1);
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

window.addEventListener("load", start);
