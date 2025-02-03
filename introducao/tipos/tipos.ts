//tipo string
let nome = 'joão'
console.log(nome)

//tipo number e float
let numero = 2
console.log(numero)

let numerofloat = 2.7
console.log(numerofloat)

//tipo boolean
let atleta =  false
console.log(atleta)

//tipo explicito
let tipoexplicito: any
tipoexplicito = 'ola'
 
//tipo array
let array: any[] = ["Flu", "Fluminense", "Nense", 1902]
console.log(array)
console.log(typeof array)

//tipo tupla
let endereco:[string,number] = ["Rua Rui Barbosa", 115]
console.log(endereco)

//enum
enum cor {
    cinza, //0
    azul, //1
    verde //2
}

let minhacor: cor = cor.cinza
console.log(minhacor)

//funçoes
function retornaMeuNome():string {
    return nome
}
console.log(retornaMeuNome())

function someDoisNumeros(numeroA:number,numeroB:number):number{
    return numeroA + numeroB

}
console.log(someDoisNumeros(23,89))

//tipo função
let multiplicar: (numeroA:number, numeroB:number) => number
multiplicar = someDoisNumeros

//objetos
let usuario = {
    nome: 'João',
    idade: 23

}

let funcionario:  
    {supervisores:string[],
    baterPonto:(horas:number) => string

} = {
    supervisores: ["Jorge Dutra", "Amadeu Vencilio", "Flávio Castro"],
    baterPonto(horas:number):string {
        if (horas <= 8) {
            return 'Dentro do horário'
        }
        else {
            return 'Fora do horário'
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(7))
console.log(funcionario.baterPonto(9))

//union types
let nota: number | string = 'dez'
console.log(nota)
console.log(nota)

//checando tipos
