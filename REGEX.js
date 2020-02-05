var fs = require('fs');
var regex = new RegExp('/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g');
fs.readFile('./arquivos/001-BB-L1P1-1.txt', 'utf-8', function (err, data) {
    if(err) throw err;
var datas = data.match(regex);
    console.log(datas);
});