// VARIAVEIS DO POKEMON
var pokemonX, pokemonY;

function brotarPokemon(){

   setInterval(() => {
      pokemonX = Math.floor(Math.random() * 600 + 1);
      pokemonY = Math.floor(Math.random() * 600 + 1);
      pokemon.style.left = pokemonX + "px";
      pokemon.style.top = pokemonY + "px";
   }, 5000);

}

function verificarColisao() {
   var validar_eixoX = positionX > pokemonX - 30 && positionX < pokemonX + 30;
   var validar_eixoY = positionY > pokemonY - 30 && positionY < pokemonY + 30;

   if (validar_eixoX && validar_eixoY) {
      console.log("!!!!Encostou!!!!");
   }
}
