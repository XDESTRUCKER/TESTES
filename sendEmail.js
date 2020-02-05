const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "roboelaw@gmail.com",
        pass: "elaw2020!"
    },
    tls: { rejectUnauthorized: false }
});

const mailOptions = {
    from: 'roboelaw@gmail.com',
    to: 'jefferson.silva@elaw.com.br',
    subject: 'PJ008 | VIA VAREJO | TESTE',
    html: '<h1>Título</h1><p>Texto!</p>',
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});