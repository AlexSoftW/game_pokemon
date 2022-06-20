// VARIAVEIS DO POKEMON
var idPokemon1 = 0;
var idPokemon2 = 0;
var idPokemon3 = 0;

var pokemonX = 0;
var pokemonY = 0;
var nomePokemon = '';
var probabilidade = 0;

//TEMPORIZADOR
var minuto = 1;
var segundo = 5;
var validar30s = 0;

// Função para validar se o treinador chegou perto do pokémon
function verificarColisao() {
   var validar_eixoX = positionX > pokemonX - 30 && positionX < pokemonX + 30;
   var validar_eixoY = positionY > pokemonY - 30 && positionY < pokemonY + 30;

   if (validar_eixoX && validar_eixoY) {
      window.location = "capturar.html"
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

   if(probabilidade >= 1 && probabilidade < 70){
      //1 FASE
      idPokemon1 = Math.floor(Math.random() * 3 + 1);
      primeira_fase();
      pokemon.innerHTML = `<img src="assets/pokemon/${nomePokemon}.gif" >`;

   }else if(probabilidade >= 70 && probabilidade < 90){
      //2 FASE
      idPokemon2 = Math.floor(Math.random() * 3 + 1);
      segunda_fase();
      pokemon.innerHTML = `<img src="assets/pokemon/${nomePokemon}.gif" style="width: 50px;">`;

   }else if(probabilidade >= 90 && probabilidade < 100){
      //3 FASE
      idPokemon3 = Math.floor(Math.random() * 3 + 1);
      terceira_fase();
      pokemon.innerHTML = `<img src="assets/pokemon/${nomePokemon}.gif" style="width: 60px;">`;

   }else if(probabilidade == 100){
      //LENDARIO
   }

}

// Função para cronometrar o respawn dos pokémon
function temporizador(){
   setInterval(() => {
      sessionStorage.setItem('min', minuto)
      sessionStorage.setItem('seg', segundo);
      if(minuto != 0 && segundo <= -1){
         segundo = 5;
         minuto = 0;

      } else if(minuto == 0 && segundo <= -1){
         brotarPokemon();

         if(validar30s == 0){
            setTimeout(() => {
               probabilidade = Math.floor(Math.random() * 100 + 1);
            }, 1500);
            
            console.log(probabilidade);
            segundo = 5;
            minuto = 0;

            validar30s = 1;

            pokemonX = 0;
            pokemonY = 0;
            pokemon.innerHTML = ""
            
         }else if(validar30s == 1){
            segundo = 5;
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

// Função para alternar entre as fases de evolução

function primeira_fase(){
   if(idPokemon1 == 1){
      nomePokemon = 'Bulbasaur';
      sessionStorage.setItem('idPoke', nomePokemon);

   } else if(idPokemon1 == 2){
      nomePokemon = 'Charmander';
      sessionStorage.setItem('idPoke', nomePokemon);

   } else if(idPokemon1 == 3){
      nomePokemon = 'Squirtle';
      sessionStorage.setItem('idPoke', nomePokemon);

   }
}

function segunda_fase(){
   if(idPokemon2 == 1){
      nomePokemon = 'Ivysaur';
      sessionStorage.setItem('idPoke', nomePokemon);

   } else if(idPokemon2 == 2){
      nomePokemon = 'Charmeleon';
      sessionStorage.setItem('idPoke', nomePokemon);

   } else if(idPokemon2 == 3){
      nomePokemon = 'Wartortle';
      sessionStorage.setItem('idPoke', nomePokemon);

   }
}

function terceira_fase(){
   if(idPokemon3 == 1){
      nomePokemon = 'Venusaur';
      sessionStorage.setItem('idPoke', nomePokemon);

   } else if(idPokemon3 == 2){
      nomePokemon = 'Charizard';
      sessionStorage.setItem('idPoke', nomePokemon);

   } else if(idPokemon3 == 3){
      nomePokemon = 'Blastoise';
      sessionStorage.setItem('idPoke', nomePokemon);

   }
}

function lendario(){
// aqui vai ficar o id do MEW!!
}




