//Frames por seg(FPS)
var frame;

function start() {
   //PERSONAGEM
   personagem = document.getElementById("personagem");
   eixoX = 0;
   eixoY = 0;
   positionX = 750;
   positionY = 160;
   velocidade = 0.4;

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

   verificarColisao();
}

window.addEventListener("load", start);
