"use strict";
let funcionarios = {
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
console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(7));
