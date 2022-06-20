// VARIAVEIS DO POKEMON
var idPokemon = 0;
var pokemonX = 0;
var pokemonY = 0;
var nomePokemon = '';

//TEMPORIZADOR
var minuto = 1;
var segundo = 10;
var validar30s = 0;

// Função para validar se o treinador chegou perto do pokémon
function verificarColisao() {
   var validar_eixoX = positionX > pokemonX - 30 && positionX < pokemonX + 30;
   var validar_eixoY = positionY > pokemonY - 30 && positionY < pokemonY + 30;

   if (validar_eixoX && validar_eixoY) {
      console.log("!!!!Encostou!!!!");
   }
}

// Função para validar os lugares que o pokémon pode respawnar
function validar_respaw(){
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
         // console.log('Lugar impossibilitado de respawn❌')
      }else{

         pokemon.style.left = pokemonX + "px";
         pokemon.style.top = pokemonY + "px"; 
         // console.log('respawn✅');
      }
}

// Função para verificar qual o próximo pokemon vai respawnar
function brotarPokemon(){
   validar_respaw();
   if(idPokemon == 1){
      nomePokemon = 'Bulbasaur'
   } else if(idPokemon == 2){
      nomePokemon = 'Charmander'
   } else if(idPokemon == 3){
      nomePokemon = 'Squirtle'
   }
   pokemon.innerHTML = `<img src="assets/pokemon/${nomePokemon}.gif">`;
}

// Função para cronometrar o respawn dos pokémon
function temporizador(){
   setInterval(() => {
      sessionStorage.setItem('min', minuto)
      sessionStorage.setItem('seg', segundo);
      if(minuto != 0 && segundo <= -1){
         segundo = 10;
         minuto = 0;

      } else if(minuto == 0 && segundo <= -1){
         brotarPokemon();

         if(validar30s == 0){
            idPokemon = Math.floor(Math.random() * 3 + 1);
            console.log(idPokemon);
            segundo = 15;
            minuto = 0;

            validar30s = 1;

            pokemonX = 0;
            pokemonY = 0;
            pokemon.innerHTML = ""
            
         }else if(validar30s == 1){
            segundo = 10;
            minuto = 1;
            validar30s = 0;
            // brotarPokemon();
         }
      } else{
         var session_minuto = sessionStorage.getItem('min');
         var session_segundo = sessionStorage.getItem('seg');

         segundo --;
         tempo.innerHTML = `Min: ${session_minuto} | Seg: ${session_segundo}`;
      }
   }, 1000);

}




