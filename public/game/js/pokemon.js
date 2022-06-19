// VARIAVEIS DO POKEMON
var pokemonX = 0;
var pokemonY = 0;

function brotarPokemon(){
   setTimeout(() => {
      pokemon.innerHTML = `<img src="assets/pokemon/pikachu.gif">`;
   }, 5000);
   validar_respaw();
}

function verificarColisao() {
   var validar_eixoX = positionX > pokemonX - 30 && positionX < pokemonX + 30;
   var validar_eixoY = positionY > pokemonY - 30 && positionY < pokemonY + 30;

   if (validar_eixoX && validar_eixoY) {
      console.log("!!!!Encostou!!!!");
   }
}

function validar_respaw(){
   setInterval(() => {
      pokemonX = Math.floor(Math.random() * 700 + 80);
      pokemonY = Math.floor(Math.random() * 500 + 80);

      if(pokemonY < 430 && pokemonY > 240 && 
         pokemonX < 160 || pokemonX < 780 && 
         pokemonY < 150 ||       
         pokemonX < 675 && pokemonX > 580 && pokemonY > 370 ||
         pokemonX < 660 && pokemonX > 450 &&
         pokemonY < 430 && pokemonY > 230){
            
         pokemonX = Math.floor(Math.random() * 400 + 175);
         pokemonY = Math.floor(Math.random() * 500 + 90);
         pokemon.style.left = pokemonX + "px";
         pokemon.style.top = pokemonY + "px"; 
         // console.log('Lugar impossibilitado de respaw❌')
      }else{

         pokemon.style.left = pokemonX + "px";
         pokemon.style.top = pokemonY + "px"; 
         // console.log('Spaw✅');
      }
   }, 5000);
}