const nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'catalintest11@gmail.com',
        pass: 'Password11'
    }
});

var appRouter = function (app) {

    app.post("/mail", function (req, res) {

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"NoReplay 👻" <foo@blurdybloop.com>', // sender address
            to: req.body.destinatars, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world ?', // plain text body
            html: '<b>Hello world ?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.send(info);
        });
    });
}

module.exports = appRouter;