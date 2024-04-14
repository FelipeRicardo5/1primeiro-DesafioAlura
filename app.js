let horaDesafio = document.querySelector('h1');
horaDesafio.innerHTML = 'Hora do desafio';

let cidade;
let num1;
let num2;

function btnconsole() {
    console.log('O botão foi clicado');
}
function btnAlerta() {
    console.log('Eu amo minha mãe!');
}
function btnPrompt() {
    cidade = prompt('Qual o nome da sua cidade?');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function btnSoma() {
    num1 = parseInt(prompt('Digite um número'));
    num2 = parseInt(prompt('Digite outro número'));
    let soma = num1 + num2;
    alert(`O resultado da soma é ${soma}`);
}

