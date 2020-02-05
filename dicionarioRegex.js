const fs = require('fs');
var cnjregex = /\d{7}\-\d{2}\.\d{4}\.\d{1}\.\d{2}.\d{4}/gi;
var danosMorais = ["dano moral", "danos morais"]

fs.readdir('./arquivos', function(error, files) {
    // console.log(files.length);
    for (let index = 0; index < files.length; index++) {
        fs.readFileSync('./arquivos/' + files[index], 'utf8', (err, texto) => {
            var cnjsrecebidos = texto.match(cnjregex);
            var cnjs = cnjsrecebidos.filter((este, i) => cnjsrecebidos.indexOf(este) === i);
            for (let index2 = 0; index2 < cnjs.length; index2++) {
                var filtro = cnjs[index2].substring(1);
                var area = filtro.substring(15, 16);
                var area = qualareadodireito(area);
                //if (area == 9) { area = "Justiça Militar Estadual"; } else if (area == 8) { area = "Cível"; } else if (area == 7) { area = "Superior Tribunal Militar"; } else if (area == 6) { area = "Tribunal Regional Eleitoral"; } else if (area == 5) { area = "Trabalhista"; } else if (area == 4) { area = "Federal"; } else if (area == 3) { area = "STJ"; } else if (area == 2) { area = "CNJ"; } else if (area == 1) { area = "STF"; } else { area = "ND"; }
                var estado = estadoscivel[filtro.substring(17, 19) - 1];
                var vara = filtro.substring(20);
                var tudo = filtro + ',' + area + ',' + estado + ',' + vara;
                console.log(tudo);
                fs.writeFile('./convertidos/' + 'lista_cnjs' + '.txt', tudo + '\n', { enconding: 'utf-8', flag: 'a' }, function(erro) {
                    if (erro) {
                        throw erro
                    }
                })
            }




        });
    };
})