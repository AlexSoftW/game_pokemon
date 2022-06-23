// VARIAVEIS DO POKEMON
var pokemonX = 0;
var pokemonY = 0;
var idPokemon = 0;
var nomePokemon = '';
var idFase1 = 0;
var idFase2 = 0;
var idFase3 = 0;
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

   if(probabilidade >= 1 && probabilidade < 75){
      //1 FASE
      idFase1 = Math.floor(Math.random() * 3 + 1);
      primeira_fase();
      pokemon.innerHTML = `<img src="assets/pokemon/respawn/${nomePokemon}.gif" >`;

   }else if(probabilidade >= 75 && probabilidade < 90){
      //2 FASE
      idFase2 = Math.floor(Math.random() * 3 + 1);
      segunda_fase();
      pokemon.innerHTML = `<img src="assets/pokemon/respawn/${nomePokemon}.gif" style="width: 60px;">`;

   }else if(probabilidade >= 90 && probabilidade < 100){
      //3 FASE
      idFase3 = Math.floor(Math.random() * 3 + 1);
      terceira_fase();
      pokemon.innerHTML = `<img src="assets/pokemon/respawn/${nomePokemon}.gif" style="width: 75px;">`;

   }else if(probabilidade == 100){
      //LENDARIO
   }
}

// Função para cronometrar o respawn dos pokémon
function temporizador(){
   var gif_loading = 'loading-timer';
   
   setInterval(() => {
      segundo --;

      if(minuto != 0 && segundo < 0){
         segundo = 5;
         minuto = 0;

      } else if(minuto == 0 && segundo < 0){
         
         if(validar30s == 0){
            segundo = 8;
            minuto = 0;
            validar30s = 1;
            gif_loading = 'procurar-timer';

            probabilidade = Math.floor(Math.random() * (100 - 1) + 1);
            sessionStorage.setItem('probabilidade', probabilidade);    
            console.log(probabilidade);

            pokemonX = 0;
            pokemonY = 0;
            pokemon.innerHTML = ""

            sessionStorage.removeItem('idPoke');
            sessionStorage.removeItem('nomePoke');

         }else if(validar30s == 1){
            segundo = 5;
            minuto = 1;
            validar30s = 0;
            gif_loading = 'loading-timer';
            
            brotarPokemon();
         }
      } else{

         cronometro.innerHTML = `
         <img src="../assets/icons/gif/${gif_loading}.gif">
         <p>Min: ${minuto} | Seg: ${segundo}</p>`;
      }
   }, 1000);
}

// Função para alternar entre as fases de evolução
function primeira_fase(){
   if(idFase1 == 1){
      idPokemon = 1;
      nomePokemon = 'Bulbasaur';
      sessionStorage.setItem('nomePoke', nomePokemon);

   } else if(idFase1 == 2){
      idPokemon = 4;
      nomePokemon = 'Charmander';
      sessionStorage.setItem('nomePoke', nomePokemon);

   } else if(idFase1 == 3){
      idPokemon = 7;
      nomePokemon = 'Squirtle';
      sessionStorage.setItem('nomePoke', nomePokemon);
   }
   sessionStorage.setItem('idPoke', idPokemon);
}

function segunda_fase(){
   if(idFase2 == 1){
      idPokemon = 2;
      nomePokemon = 'Ivysaur';
      sessionStorage.setItem('nomePoke', nomePokemon);

   } else if(idFase2 == 2){
      idPokemon = 5;
      nomePokemon = 'Charmeleon';
      sessionStorage.setItem('nomePoke', nomePokemon);

   } else if(idFase2 == 3){
      idPokemon = 8;
      nomePokemon = 'Wartortle';
      sessionStorage.setItem('nomePoke', nomePokemon);
   }
   sessionStorage.setItem('idPoke', idPokemon);
}

function terceira_fase(){
   if(idFase3 == 1){
      idPokemon = 3;
      nomePokemon = 'Venusaur';
      sessionStorage.setItem('nomePoke', nomePokemon);

   } else if(idFase3 == 2){
      idPokemon = 6;
      nomePokemon = 'Charizard';
      sessionStorage.setItem('nomePoke', nomePokemon);

   } else if(idFase3 == 3){
      idPokemon = 9;
      nomePokemon = 'Blastoise';
      sessionStorage.setItem('nomePoke', nomePokemon);
   }
   sessionStorage.setItem('idPoke', idPokemon);
}

function lendario(){
// aqui vai ficar o id do MEW!!
}




