// VARIAVEIS DO PERSONAGEM
var personagem;
var velocidade; 
var positionX, positionY;
var eixoX, eixoY;

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
   var obstaculo = document.getElementById('obs1');

   // pega todas as informações de uma classe/ID do css
   var obstaculoCordenadas = obstaculo.getBoundingClientRect();

   // console.log(obstaculoCordenadas.x);
   // console.log(obstaculoCordenadas.top);

   // 37 = Esquerda | 38 = Cima | 39 = Direita | 40 = Baixo
      if (tecla == 37) {
         eixoX = -1;
         personagem.innerHTML = `<img src="assets/char/ash_esquerda_gif.gif">`
         
      } else if (tecla == 38) {
         eixoY = -1;
         personagem.innerHTML = `<img src="assets/char/ash_costas_gif.gif">`    
                
      } else if (tecla == 39) {
         if(positionY >= obstaculoCordenadas.y - 30 && positionY <= obstaculoCordenadas.y + 30
            && positionX >= obstaculoCordenadas.x - 30){
            eixoX = 0;
         }else{
            eixoX = 1;
            personagem.innerHTML = `<img src="assets/char/ash_direita_gif.gif">`
         }         
         
      } else if (tecla == 40) {
         if(positionY >= obstaculoCordenadas.top - 30 && 
            positionX >= obstaculoCordenadas.left - 30){
            eixoY = 0;
         } else{
            eixoY = 1;
            personagem.innerHTML = `<img src="assets/char/ash_frente_gif.gif">`      
         }
      }
      // console.log(obstaculoCordenadas);
}



