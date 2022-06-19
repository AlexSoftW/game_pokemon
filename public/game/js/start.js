//Frames por seg(FPS)
var frame;
var minuto = 1;
var segundo = 59;

function start() {
   //PERSONAGEM
   personagem = document.getElementById("personagem");
   eixoX = 0;
   eixoY = 0;
   positionX = 750;
   positionY = 158;
   velocidade = 0.4;

   //POKEMON
   pokemonX = 150;
   pokemonY = 540;

   //MOVIMENTAÇÃO
   document.addEventListener("keydown", teclaDown);
   document.addEventListener("keyup", teclaUp);

   // Tempo de Frames por seg (FPS = quanto menor for o num, mais linear fica a movimentação)
   frame = setInterval(enterFrame, 1);
   // cronometro = setInterval(temporizador, 1000);
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

// function temporizador(){
//    if(minuto != 0 && segundo <= -1){
//       segundo = 59;
//       minuto = 0;
//    } else if(minuto == 0 && segundo <= -1){
//       segundo = 59;
//       minuto = 1;
//    } else{
//       var seg = segundo --
//       tempo.innerHTML = `Min: ${minuto} | Seg: ${seg}`;
//    }
// }


window.addEventListener("load", start);
