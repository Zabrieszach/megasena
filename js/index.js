const numerosApostados = [];
const resultado = [];

const btnApostar = document.getElementById("btn-apostar");
btnApostar.disabled = true;

let valorAposta = 0;
let qtdAcertos = 0;
sortearNumeros();


// Get the theme toggle input
const themeToggle = document.querySelector(
    '.switch input[type="checkbox"]'
  );
  // Function that will switch the theme based on the if the theme toggle is checked or not
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  // Add an event listener to the theme toggle, which will switch the theme
  themeToggle.addEventListener("change", switchTheme, false);

  // Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");
// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
// If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}

function sortearNumeros(){
    for(i = 0; i < 6; i++){

        //ele sorteia um numero aleatório de 0 até 1 vezes 59 e depois soma 1 porque nao queremos o valor 0
        let numeroSorteado = Math.round(Math.random() * 59 + 1) 

           //se o mesmo numero for sorteado outra vez, ele sorteia de novo até parar de repetir
        while(resultado.includes(numeroSorteado)){           
            let numeroSorteado = Math.round(Math.random() * 59 + 1)
        }
        //armazena o numero sorteado dentro da lista do resultado
        resultado.push(numeroSorteado); 
    }
}

//toda vez que eu clique em um numero, esse numero fique desabilitado

function selecionarNumero(numero){

    if(numerosApostados.length >= 00 && numerosApostados.length < 15){
        
        //adiciona um numero dentro do arrray
        numerosApostados.push(numero);

        //desabilita o numero escolhido
        desabilitarNumeroEscolhido(numero);

        //habilitando o botão Apostar
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;

            //mostra o valor da aposta
            valorDaAposta();
        }

        //mostrar quantidade de números apostados
        const qtdApostas= document.getElementById("qtdNumeros"); 
        qtdApostas.innerHTML = "<p>Qtd Números</p><p class='valor'>" + numerosApostados.length +"</p>"; 
    }
   
}

function desabilitarNumeroEscolhido(numero){
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
}

function valorDaAposta(){
    switch(numerosApostados.length){
        case 6:
            valorAposta = "R$4,50"
            break;
        case 7:
            valorAposta = "R$31,50"
            break;     
        case 8:
            valorAposta = "R$126,00"
            break;
        case 9:
            valorAposta = "R$378,00"
            break;           
        case 10:
            valorAposta = "R$945,00"
            break;
        case 11:
            valorAposta = "R$2.079,00"
            break;     
        case 12:
            valorAposta = "R$4.158,00"
            break;
        case 13:
            valorAposta = "R$6.006,00"
           break;   
        case 14:
            valorAposta = "R$10.510,50"
            break;
        case 15:
            valorAposta = "R$17.517,50"
           break;  
        default:
            valorAposta = "R$0,00"
            break;
    }

    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = "<p>Valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";
}


function apostar(){
    //fazer a aposta - comparar os numeros sorteados com os apostados
    for(i = 0; i< numerosApostados.length; i++){
        if(resultado.includes(numerosApostados[i])){
            qtdAcertos++;
        }
      
      //segunda maneira de fazer essa aposta

            // for(j = 0; j< resultado.length; j++){
            //     if(numerosApostados[i] == resultado[j]){
            //         qtdAcertos++;
            //     }
            // }
    }

    //mostrar o resultado
    const divResultado = document.getElementById("resultado");
    for(i = 0; i < resultado.length; i++){
        divResultado.innerHTML +=  "<div class='resultadoCircle'>"+ resultado[i] +"</div>";
    }

    //mostrar a quantidade de acertos
        divAcertos = document.getElementById("acertos");
        divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>"+qtdAcertos+"</p>"

    //desabilitar todos os botões
    desabilitarTodosNumeros();

    //habilitar o botão reiniciar
    document.getElementById("btn-reiniciar").style.display = 'inline';
}

function desabilitarTodosNumeros(){
    for(i = 1; i < 60; i++){
        document.getElementById("num_" + i).disabled = true;
        document.getElementById("btn-apostar").disabled = true;
    }
}

let btn = document.querySelector("#btn-reiniciar");

//ele vai escutar o evento e chamar essa função. o evento no caso é o click
btn.addEventListener("click", function(){
    location.reload();
});

function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      
      // Set the user's theme preference to dark
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      
      // Set the user's theme preference to light
      localStorage.setItem("theme", "light");
    }
  }

