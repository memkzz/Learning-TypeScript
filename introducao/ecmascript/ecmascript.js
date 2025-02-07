"use strict";
//let & cont
let some = 2;
console.log(some);
let frio = false;
if (frio) {
    let acao = "colocar casado";
    console.log(acao);
}
else {
    let acao2 = "ficar sem casaco";
    console.log(acao2);
}
//arrow function
const soma = function (a, b) {
    return a + b;
};
console.log(soma(3, 2));
const subtrair = (a, b) => a - b;
console.log(subtrair(6, 2));
//this
//parametro padra
function algo(n1 = 1) {
    return n1;
}
console.log(algo());
//Rest & Spread
const numeross = [2, 44, 6, 1, 8];
console.log(Math.max(...numeross));
const turmaA = ["João", "Maria", "Victor"];
const turmaB = ["Ingrid", "Pietra", "Antonia", ...turmaA];
function arrayNum(...args) {
    return args;
}
const numeroo = [1, 2, 3, 4];
console.log(arrayNum(...numeroo));
//Operador Destructuring (Array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//Operador Destructuring (Objeto)
const item = {
    nome: "Impressora",
    preco: 300
};
const { nome: n, preco: p } = item;
console.log(n);
console.log(p);
//Template String
const nome1 = "José";
const ficha = 221455;
const boasVindas = `Bem-vindo ${nome1}, sua ficha é a ${ficha}, divirta-se!`;
console.log(boasVindas);
//Exercicio 1
function dobro(valor) {
    return valor * 2;
}
console.log(dobro(5));
//Exercicio 2
function dizerOla(nome = 'Pessoa') {
    const saudacao = `Olá ${nome}`;
    return saudacao;
}
console.log(dizerOla());
//Exercicio 3
const array1 = [3, 5, 8, 9];
console.log(Math.min(...array1));
//Exercicio 4
const array2 = [22, 65, 77, ...array1];
console.log(array2);
//Exercicio 5
const notas = [7.4, 5.5, 9.2];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
//Exercicio 6
const cientista = {
    nome: "Alberto",
    experiencia: 8
};
const { nome: nomee, experiencia: experiencia } = cientista;
console.log(nomee, experiencia);
