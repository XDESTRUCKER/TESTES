var linhaDigitavel = "00190.00009 02836.585006 73742.627174 7 78250000034287";

var dias = parseInt(linhaDigitavel.substr(40, 4));

Date.prototype.adicionarDias = function(dias) {
    var data = new Date(this.valueOf());
    data.setDate(data.getDate() + dias);
    let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
    return dia+'-'+mes+'-'+ano;
};

// Meses são indexados em zero em JavaScript, logo é necessário subtrair 1 do mês desejado.
var dataInicialFebraban = new Date(1997, 10 - 1, 7);

console.log(dataInicialFebraban);
console.log(dataInicialFebraban.adicionarDias(dias));

// Resultado: 2019-03-11T03:00:00.000Z