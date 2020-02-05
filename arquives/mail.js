var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jefferson.silva@elaw.com.br',
    pass: 'ph4m1l1a'
  }
});

var mailOptions = {
  from: 'jefferson.silva@elaw.com.br',
  to: 'jefferson.silva@elaw.com.br',
  subject: 'Assunto do e-mail aqui',
  text: 'Seu texto aqui'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 