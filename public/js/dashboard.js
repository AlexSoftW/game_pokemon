//Session storage do usuario conectado
var nome_home = sessionStorage.NOME_USUARIO;
var id_home = sessionStorage.ID_USUARIO;
var pokeInicial_home = sessionStorage.POKEMON_USUARIO;
var genero_home = sessionStorage.GENERO_USUARIO;

//DADOS DASHBOARD(USUARIO)
function listar_all_pokemon_usuario() {
   fetch(`/usuarios/listar_all_pokemon_user/${id_home}`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
               
               for (let i = 0; i < resposta.length; i++) {
                  var query = resposta[i];

                  var cor = "red"
                  if(query.Status == "Capturado"){
                     cor = "green"
                  }

                  grafico_pokemon.innerHTML += `
                  <div class="bag_pokemon" id="bag_pokemon">
                     <div class="item">
                        <img src="../assets/img/pokemon/pokemon/${query.Pokemon}.png">
                        <p>${query.Pokemon}</p>
                     </div>
                     <div class="item">
                        <p>Tipo</p>
                        <img src="../assets/img/pokemon/pokemon/type/${query.tipo}.png">
                     </div>
                     <div class="item">
                        <p>Peso</p>
                        <p>${query.peso}KG</p>
                     </div>
                     <div class="item">
                        <p>Altura</p>
                        <p>${query.altura}M</p>
                     </div>
                     <div class="item">
                        <p>Status</p>
                        <p style="color: ${cor}">${query.Status}</p>
                     </div> 
                  </div>
                        `;
               }
            });
         } else {
            throw "Houve um erro na função ultimo_pokemon_capturado, linha 181!";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   44;
}

function ultimo_pokemon_capturado() {
   fetch(`/usuarios/ultimo_capturado/${id_home}`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));

               var card_img_poke = document.getElementById("card_img_pokemon");
               var card_type_pokemon =
                  document.getElementById("card_type_pokemon");
               var card_altura_pokemon = document.getElementById(
                  "card_altura_pokemon"
               );
               var card_peso_pokemon =
                  document.getElementById("card_peso_pokemon");

               for (let i = 0; i < resposta.length; i++) {
                  var query = resposta[i];

                  card_img_poke.innerHTML = `
                     <img src="../assets/img/pokemon/pokemon/${query.Pokemon}.png" />
                     <p id="nome_tag_pokemon">${query.Pokemon}</p>`;

                  card_type_pokemon.innerHTML = `
                     <p class="title_card" id="title_card">Tipo</p>
                              <img
                                 src="../assets/img/pokemon/pokemon/type/${query.tipo}.png"
                                 width="55px"
                              />`;

                  card_altura_pokemon.innerHTML = `
                     <p class="title_card">Altura</p>
                              <p>${query.altura}m</p>`;

                  card_peso_pokemon.innerHTML = `
                     <p class="title_card">Peso</p>
                              <p>${query.peso}kg</p>`;
               }

               //finalizarAguardar();
            });
         } else {
            throw "Houve um erro na função ultimo_pokemon_capturado, linha 181!";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   44;
}