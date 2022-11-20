const nodemailer = require("nodemailer");

/*
controller.sendMail = (req, res) => {
    const nombre = req.body.nombre;
    const mail = req.body.mail;
    const telefono = req.body.telefono;
    const asunto = req.body.asunto;
    const consulta = req.body.consulta;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    const mailOptions = {
        to: "Equipo de Reciclarg",
        from: `${nombre}`,
        subject: `${asunto}`,
        html: `<h1 style="color: blue;"> <b> Al Equipo Los Chip-eros creadores de Reciclarg </b> </h1>
        <br>
        <p>${consulta}</p>
        <br><br>
        <p>Contacto del Sr/a : ${nombre}</p>
        <br>
        <p>Teléfono: ${telefono}</p>
        <br>
        <p>Email: ${mail}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.status(200).send(info.message);
        }
        res.status(200).jsonp(reqbody)
    });
}
*/