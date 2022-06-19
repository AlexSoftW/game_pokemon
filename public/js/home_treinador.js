//Session storage do usuario conectado
var nome_home = sessionStorage.NOME_USUARIO;
var id_home = sessionStorage.ID_USUARIO;
var pokeInicial_home = sessionStorage.POKEMON_USUARIO;
var genero_home = sessionStorage.GENERO_USUARIO;

var informacoes_pokemon = [{nome: 'bulbasaur', nomeMaisculo: 'Bulbasaur', numPokedex: '001', tipo: 'grass',
                           altura: '0.7', peso: '6.9', segEvolution: 'ivysaur', terEvolution: 'venusaur',
                           atk: '30', def: '30', hp: '30', spd: '30'},
                           {nome: 'charmander', nomeMaisculo: 'Charmander', numPokedex: '004', tipo: 'fire',
                           altura: '0.6', peso: '8.5', segEvolution: 'charmeleon', terEvolution: 'charizard',
                           atk: '40', def: '30', hp: '30', spd: '40'},
                           {nome: 'squirtle', nomeMaisculo: 'Squirtle', numPokedex: '007', tipo: 'water',
                           altura: '0.5', peso: '9.0', segEvolution: 'wartortle', terEvolution: 'blastoise',
                           atk: '30', def: '40', hp: '30', spd: '30'}]

span_nome_treinador.innerHTML = nome_home;
tag_name.innerHTML = nome_home;

function feminino() {
   tag_sub_name.innerHTML = "Treinadora Pokémon";
   informacoes.innerHTML = `<p>Gênero:</p>
      <img src="../assets/img/pokemon/icons/feminino.png"/>`;
   treinador_pokemon.innerHTML = `<img src="../assets/img/pokemon/treinador/girl.png"/>`;
}

function masculino() {
   tag_sub_name.innerHTML = "Treinador Pokémon";
   informacoes.innerHTML = `<p>Gênero:</p>
      <img src="../assets/img/pokemon/icons/masculino.png"/>`;
   treinador_pokemon.innerHTML = `<img src="../assets/img/pokemon/treinador/ash.png"/>`;
}

if (genero_home == "M") {
   masculino();
} else if (genero_home == "F") {
   feminino();
} else {
   alert("❌error❗: você não tem permissão de acessar está página!");
}

if (pokeInicial_home == "Bulbasaur") {
   bulbasaur_home();
} else if (pokeInicial_home == "Charmander") {
   charmander_home();
} else{
   squirtle_home();
}

function sair_sessao() {
   window.location = "../login.html";
   sessionStorage.clear();
}

function bulbasaur_home() {
   poke_fav.innerHTML = `<p>Pokemon Fav:</p>
                           <img src="../assets/img/pokemon/pokemon/bulbasaur_pixel.png"/>`;
   title_pokemon.innerHTML = informacoes_pokemon[0].nomeMaisculo;
   sub_title_pokemon.innerHTML = `Nº ${informacoes_pokemon[0].numPokedex}`;
   pokemon_card.innerHTML = `<img src="../assets/img/pokemon/pokemon/card_${informacoes_pokemon[0].nome}.png"/>`;
   altura.innerHTML = `Altura: ${informacoes_pokemon[0].altura} m`;
   peso.innerHTML = `Peso: ${informacoes_pokemon[0].peso} kg`;
   tipo.innerHTML = `<img src="../pokemon_game/icons/${informacoes_pokemon[0].tipo}.png"/>`;
   evolucao.innerHTML += `<img src="../assets/img/pokemon/pokemon/${informacoes_pokemon[0].segEvolution}_pixel.png"/>` 
   evolucao.innerHTML += `<img src="../assets/img/pokemon/pokemon/${informacoes_pokemon[0].terEvolution}_pixel.png"/>` 

   barra_atk.innerHTML = `<p style="width: ${informacoes_pokemon[0].atk}%" class="barra_atk">
                              ${informacoes_pokemon[0].atk}
                           </p>`
   barra_def.innerHTML = `<p style="width: ${informacoes_pokemon[0].def}%" class="barra_def">
                              ${informacoes_pokemon[0].def}
                           </p>`
   barra_hp.innerHTML = `<p style="width: ${informacoes_pokemon[0].hp}%" class="barra_hp">
                              ${informacoes_pokemon[0].hp}
                           </p>`
   barra_spd.innerHTML = `<p style="width: ${informacoes_pokemon[0].spd}%" class="barra_spd">
                              ${informacoes_pokemon[0].spd}
                           </p>`
}

function charmander_home() {
   poke_fav.innerHTML = `<p>Pokemon Fav:</p>
                           <img src="../assets/img/pokemon/pokemon/charmander_pixel.png"/>`;
   title_pokemon.innerHTML = informacoes_pokemon[1].nomeMaisculo;
   sub_title_pokemon.innerHTML = `Nº ${informacoes_pokemon[1].numPokedex}`;
   pokemon_card.innerHTML = `<img src="../assets/img/pokemon/pokemon/card_${informacoes_pokemon[1].nome}.png"/>`;
   altura.innerHTML = `Altura: ${informacoes_pokemon[1].altura} m`;
   peso.innerHTML = `Peso: ${informacoes_pokemon[1].peso} kg`;
   tipo.innerHTML = `<img src="../pokemon_game/icons/${informacoes_pokemon[1].tipo}.png"/>`;
   evolucao.innerHTML += `<img src="../assets/img/pokemon/pokemon/${informacoes_pokemon[1].segEvolution}_pixel.png"/>` 
   evolucao.innerHTML += `<img src="../assets/img/pokemon/pokemon/${informacoes_pokemon[1].terEvolution}_pixel.png"/>` 

   barra_atk.innerHTML = `<p style="width: ${informacoes_pokemon[1].atk}%" class="barra_atk">
                              ${informacoes_pokemon[1].atk}
                           </p>`
   barra_def.innerHTML = `<p style="width: ${informacoes_pokemon[1].def}%" class="barra_def">
                              ${informacoes_pokemon[1].def}
                           </p>`
   barra_hp.innerHTML = `<p style="width: ${informacoes_pokemon[1].hp}%" class="barra_hp">
                              ${informacoes_pokemon[1].hp}
                           </p>`
   barra_spd.innerHTML = `<p style="width: ${informacoes_pokemon[1].spd}%" class="barra_spd">
                              ${informacoes_pokemon[1].spd}
                           </p>`
}

function squirtle_home() {
   poke_fav.innerHTML = `<p>Pokemon Fav:</p>
                           <img src="../assets/img/pokemon/pokemon/squirtle_pixel.png"/>`;
   title_pokemon.innerHTML = informacoes_pokemon[2].nomeMaisculo;
   sub_title_pokemon.innerHTML = `Nº ${informacoes_pokemon[2].numPokedex}`;
   pokemon_card.innerHTML = `<img src="../assets/img/pokemon/pokemon/card_${informacoes_pokemon[2].nome}.png"/>`;
   altura.innerHTML = `Altura: ${informacoes_pokemon[2].altura} m`;
   peso.innerHTML = `Peso: ${informacoes_pokemon[2].peso} kg`;
   tipo.innerHTML = `<img src="../pokemon_game/icons/${informacoes_pokemon[2].tipo}.png"/>`;
   evolucao.innerHTML += `<img src="../assets/img/pokemon/pokemon/${informacoes_pokemon[2].segEvolution}_pixel.png"/>` 
   evolucao.innerHTML += `<img src="../assets/img/pokemon/pokemon/${informacoes_pokemon[2].terEvolution}_pixel.png"/>` 

   barra_atk.innerHTML = `<p style="width: ${informacoes_pokemon[2].atk}%" class="barra_atk">
                              ${informacoes_pokemon[2].atk}
                           </p>`
   barra_def.innerHTML = `<p style="width: ${informacoes_pokemon[2].def}%" class="barra_def">
                              ${informacoes_pokemon[2].def}
                           </p>`
   barra_hp.innerHTML = `<p style="width: ${informacoes_pokemon[2].hp}%" class="barra_hp">
                              ${informacoes_pokemon[2].hp}
                           </p>`
   barra_spd.innerHTML = `<p style="width: ${informacoes_pokemon[2].spd}%" class="barra_spd">
                              ${informacoes_pokemon[2].spd}
                           </p>`
}