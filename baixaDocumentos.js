var http = require("https");
const fs = require('fs');

var options = {
    "method": "POST",
    "hostname": "elawlab-pj005-dev.elaw.com.br",
    "port": null,
    "path": "/api/BaixarDocumento",
    "headers": {
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        "cache-control": "no-cache",
        "postman-token": "ba223df0-ee77-566f-1f34-feb38f640209"
    }
};

var req = http.request(options, function(res) {
    var chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function() {
        var body = Buffer.concat(chunks);
        var docx = body.toString();
        fs.writeFileSync(`C:\\Users\\jefferson.rodrigues\\Documents\\dev\\TESTES\\resultados\\teste.docx`, docx, 'utf8', function(erro) {
            if (erro) {
                throw erro;
            }
        });
    })
});

req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"documentoId\"\r\n\r\n5d94f6eeb212d80012972cad\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
req.end();