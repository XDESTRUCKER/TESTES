const fs = require('fs');

const criaVar = ``;

var input = `dano moral`

var inputToken = input.split(/\s/gi);

for (let index = 0; index < inputToken.length; index++) {
    var criando = inputToken[index];
    if (criando.substring(criando.length - 1, criando.length) == `o`) {
        criando = "deucerto";
    }
    console.log(criando.substring(criando.length - 1, criando.length));
};