type Funcionario = {
    supervisores:string[],
    baterPonto:(horas:number) => string
}

let funcionarios: Funcionario = {
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
let funcionario2:  Funcionario =  {
    supervisores: ["Jardes Dutra", "Carlos Vencilio", "FRaces Castro"],
    baterPonto(horas:number):string {
        if (horas <= 8) {
            return 'Dentro do horário'
        }
        else {
            return 'Fora do horário'
        }
    }
}
console.log(funcionarios.supervisores)
console.log(funcionarios.baterPonto(7))

