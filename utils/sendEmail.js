const nodemailer = require('nodemailer');

const sendEmail = async options => {
    // //options in authcontroller
    // try{
    //     await sendEmail({
    //         email: user.email, 
    //         subject : 'Kapoor Di Hatti password recovery ',
    //         message
    //     })
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "41809d06722945",
            pass: "a0944e7db5e3c1"
            // host: process.env.SMTP_HOST,
            // port: process.env.SMTP_PORT,
            // secure: true,
            // auth: {
            //   user: process.env.SMTP_EMAIL,
            //   pass: process.env.SMTP_PASSWORD
        }
    });

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message

    }
    await transporter.sendMail(message);
}
module.exports = sendEmail;