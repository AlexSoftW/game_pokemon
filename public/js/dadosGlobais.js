//Session storage do usuario conectado
var nome_home = sessionStorage.NOME_USUARIO;
var id_home = sessionStorage.ID_USUARIO;
var pokeInicial_home = sessionStorage.POKEMON_USUARIO;
var genero_home = sessionStorage.GENERO_USUARIO;

//DADOS GLOBAIS
function listar_all_pokemon() {
   fetch(`/usuarios/listar_all`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));

               var tabela = document.getElementById("tabela");
               

               for (let i = 0; i < resposta.length; i++) {
                  var query = resposta[i];
                  var cor = "green";

                  if(query.Status == "Fugiu"){
                     cor = "red"
                  }
                  
                  tabela.innerHTML += `
                     <tr class="tabela_global">
                        <td>${query.Treinador}</td>
                        <td>${query.DataCaptura}</td>
                        <td class="td_pokemon"><img src="../assets/img/pokemon/pokemon/${query.Pokemon}.png">
                           <p style="font-size:15px">${query.Pokemon}</p>
                        </td>
                        <td style="color:${cor}; font-weight: bolder">${query.Status}</td>
                     </tr>
                     `;
               }

               //finalizarAguardar();
            });
         } else {
            throw "Houve um erro na função listar_all_pokemon() JS:home_treinador|linha 236!";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   44;
}

function listar_pokemon_inicial_escolhido(){
   fetch(`/usuarios/listar_inicial_escolhido`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));

               for (let i = 0; i < resposta.length; i++) {
                  var query = resposta[i];
                  
                  if(query.nomePokemon == 'Charmander'){
                     var qtd_escolhido = query.qtdEscolhido;
                     sessionStorage.setItem("qtd_charmander_escolhido", qtd_escolhido)

                  } else if(query.nomePokemon == 'Bulbasaur'){
                     var qtd_escolhido = query.qtdEscolhido;
                     sessionStorage.setItem("qtd_bulbasaur_escolhido", qtd_escolhido)

                  } else{
                     var qtd_escolhido = query.qtdEscolhido;
                     sessionStorage.setItem("qtd_squirtle_escolhido", qtd_escolhido)
                  }
               }
            });
         } else {
            throw "Houve um erro na listar_pokemon_inicial_escolhido() JS:home_treinador|linha 341!";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
}

function listar_lider_capturado() {
   fetch(`/usuarios/listar_lider`)
      .then(function (resposta) {
         if (resposta.ok) {
            if (resposta.status == 204) {
               //   alert('ERRO ULTIMO CAPTURADO!');
            }
            resposta.json().then(function (resposta) {
               console.log("Dados recebidos: ", JSON.stringify(resposta));
               var char = "";

               for (let i = 0; i < resposta.length; i++) {
                  var query = resposta[i];

                  if(query.genero == "M"){
                     char = "ash"
                  } else{
                     char = "girl"
                  }

                  card_global_name.innerHTML = `
                  <p>${query.Treinador}</p>
                  <hr>`;

                  card_global_char.innerHTML = `
                  <img src="../assets/img/pokemon/treinador/${char}.png">`;

                  card_global_qtd.innerHTML = `
                  <h1>${query.qtdCaptura}</h1>`;
               }
            });
         } else {
            throw "Houve um erro na função listar_lider_capturado() JS:home_treinador|linha 373!";
         }
      })
      .catch(function (resposta) {
         console.error(resposta);
         //finalizarAguardar();
      });
   44;
}