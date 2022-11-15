const controller = {}
const nodemailer = require('nodemailer');
const {proto} = require('once');


controller.index = (req, res) => {
    res.render('index', {
        titulo: "A continuación, veremos los diferentes contenedores de reciclaje que existen según su color.",
        amarillo: "Contenedor Amarillo",
        amarilloDescripcion: "El contenedor amarillo es el adecuado para reciclar plásticos, latas y envases.",
        amarilloBackside: "En este tipo de contenedores se debe almacenar todo material que esté hecho a base de plástico. Como botellas de plástico, envases de alimentos, bolsas de plástico, briks de leche, etc. También las latas de conserva y de refrescos deben depositarse en el contenedor amarillo.",
        boton: "Saber más",
        azul: "Contenedor Azul",
        azulDescripcion: "El contenedor azul es el correspondiente para depositar papel y cartón.",
        azulBackside: "Este tipo de contenedores está diseñado para almacenar cualquier tipo de cartón procedente de cajas, envases de cartón y cualquier tipo de papel como periódicos, revistas, documentos, folletos, papeles de envolver, pancartas de publicación, entre otros. Es importante plegar las cajas de cartón antes de depositarlas en el contenedor azul para que ocupen el menor espacio posible y den cabida a más material para reciclar.",
        verde: "Contenedor Verde",
        verdeDescripcion: "El contenedor verde, también conocido como iglú verde, es el destinado para depositar vidrio.",
        verdeBackside: "En esta categoría deben reciclarse las botellas de vidrio, tarros, trozos de espejos y cristales rotos, entre otros. En esta categoría no entran los materiales como la cerámica o la porcelana, tampoco hay que depositar metales ni plásticos. Antes de tirar una botella o tarro de vidrio al contenedor verde hay que quitarle el tapón y reciclarlo en el contenedor correspondiente según sea de metal, de plástico o de corcho."
    });
}

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


module.exports = controller;