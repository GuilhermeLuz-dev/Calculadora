// Pegando os elementos da calculadora;
const numeros = document.querySelectorAll(".num");
const result = document.querySelector(".result");
const calc = document.querySelector(".calc");
const sinais = document.querySelectorAll(".sinal");

// Criando variáveis auxiliares;
let sinalAtual;
let verificandoResult = false;
let verificandoIgual = false;

// Pegando os números que serão calculados;
const pegarValor = (elemento) => {
    if (verificandoResult) {  // Verficando se é o primeiro valor ou o segundo para que seja exposto na tela;
        result.innerHTML = ""; // Caso seja o segundo valor, a tela é limpa para que entre apenas números do segundo valor; 
        verificandoResult = false;
        verificandoIgual = true;
    }
    if (elemento.target.innerText == ".") { // Verificando se ja foi adicionado algum ponto, para impedir repetição;
        for (let i = 0; i < result.innerText.length; i++) {
            if (result.innerText[i] == ".") return;
        }

    }

    // verificandoIgual = true; // Possibilitando que o botão igual seja usado;  
    result.innerHTML += elemento.target.innerText; // Adicionando números na tela;




}
// Pegando o operador que será usado no cálculo; 
const pegarSinal = (elemento) => {
    if (elemento.target.innerText == "-" && result.innerText == "") { // Possibilitando que o menos seja usado antes de algum número; 
        result.innerHTML += elemento.target.innerText;
        return;
    }
    calc.innerHTML = `${result.innerText} ${elemento.target.innerText} `; //Adicionando o sinal na div "calc" junto com o primeiro valor; 
    sinalAtual = elemento.target.innerText;
    verificandoResult = true; // Possibilitando que um segundo valor seja adicionado;
}

// Limpando a tela;
const clean = () => {
    result.innerHTML = "";
    calc.innerHTML = "";
}

// Calculando os valores de acordo com o operador escolhido;
const igual = () => {
    if (verificandoIgual) { //Verificando se o botão igual pode ser usado;

        switch (sinalAtual) {
            case "+": result.innerHTML = parseFloat(calc.innerText) + parseFloat(result.innerText);

                break;
            case "-": result.innerHTML = parseFloat(calc.innerText) - parseFloat(result.innerText);

                break;
            case "*": result.innerHTML = parseFloat(calc.innerText) * parseFloat(result.innerText);

                break;
            case "/": result.innerHTML = parseFloat(calc.innerText) / parseFloat(result.innerText);

                break;

            default: return;
                break;
        }
        verificandoIgual = false; //Bloqueando o uso do botão igual;
    }
    calc.innerHTML = "";
    verificandoResult = true; // Possibilitando que novos valores sejam adicionados;
}

// Apagando número por número;
const apagar = () => {
    result.innerHTML = result.innerText.slice(0, -1);
}

//Adicionando eventos de click no botões; 

numeros.forEach((e) => {
    e.addEventListener("click", pegarValor);
});

sinais.forEach((e) => {
    e.addEventListener("click", pegarSinal);
})

document.querySelector(".clean").addEventListener("click", clean);

document.querySelector(".igual").addEventListener("click", igual);

document.querySelector(".delete").addEventListener("click", apagar);