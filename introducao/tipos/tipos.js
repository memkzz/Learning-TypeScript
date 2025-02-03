"use strict";
//tipo string
let nome = 'joão';
console.log(nome);
//tipo number e float
let numero = 2;
console.log(numero);
let numerofloat = 2.7;
console.log(numerofloat);
//tipo boolean
let atleta = false;
console.log(atleta);
//tipo explicito
let tipoexplicito;
tipoexplicito = 'ola';
//tipo array
let array = ["Flu", "Fluminense", "Nense", 1902];
console.log(array);
console.log(typeof array);
//tipo tupla
let endereco = ["Rua Rui Barbosa", 115];
console.log(endereco);
//enum
var cor;
(function (cor) {
    cor[cor["cinza"] = 0] = "cinza";
    cor[cor["azul"] = 1] = "azul";
    cor[cor["verde"] = 2] = "verde"; //2
})(cor || (cor = {}));
let minhacor = cor.cinza;
console.log(minhacor);
//funçoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function someDoisNumeros(numeroA, numeroB) {
    return numeroA + numeroB;
}
console.log(someDoisNumeros(23, 89));
//tipo função
let multiplicar;
multiplicar = someDoisNumeros;
//objetos
let usuario = {
    nome: 'João',
    idade: 23
};
let funcionario = {
    supervisores: ["Jorge Dutra", "Amadeu Vencilio", "Flávio Castro"],
    baterPonto(horas) {
        if (horas <= 8) {
            return 'Dentro do horário';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
//union types
let nota = 'dez';
console.log(nota);
console.log(nota);
