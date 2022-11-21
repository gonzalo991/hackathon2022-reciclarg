const controller = {}
const nodemailer = require('nodemailer');
const Recompensas = require('../models/recompensas.models');

controller.index = (req, res) => {
    res.render('index', {
        titulo: "Contenedores para el reciclaje que existen según su color.",
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
};

controller.error = async (req, res) => {
    res.render('error404');
};

controller.recompensas = async (req, res) => {

    const recompensas = await Recompensas.find({}).exec((err, recoData) => {
        if (!recoData) {
            throw err;
        } else {
            res.render('recompensas', {
                empresas: "ESTAS EMPRESAS APOYAN EL PROYECTO",
                results: recoData
            })
        }
    });
};

controller.tutoriales = (req, res) => {
    res.render('tutoriales', {
        aprende: "Aprende a reciclar con nosotros",
        descripcion: "En esta sección encontraremos diferentes videos de reciclaje, tanto como botellas, vidrios y cartón.",
        descripcionCon: "Mirá los siguientes videos y aprende de manera fácil como reciclar.",
        carton: "Video de reciclaje de Cartón",
        plastico: "Video de reciclaje de botellas",
        vidrio: "Video de reciclaje de Vidrio"
    })
}

//Nodemailer

controller.exito = (req, res) => {
    res.render('exito', {
        enviado: "TU MENSAJE SE ENVIÓ EXITOSAMENTE",
        respuesta: "TE RESPONDEREMOS A LA BREVEDAD"
    });
}

controller.sendEmail = (req, res) => {
    const { nombre, mail, telefono, asunto, consulta } = req.body;


    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'timmothy.johns@ethereal.email',
            pass: 'xXCTsUX89BKsWe8JV7'
        }
    });

    const mailOptions = {
        to: "equiporeciclarg@reciclarg.com",
        from: "Conacto Reciclarg",
        subject: "Consulta de un seguidor",
        html: `<h1 style="color: cadetblue; font-size: 1.5rem; font-weight:bold;">El siguiente mensaje fue enviado desde la página
        de Reciclarg</h1>
        <br>
        <p style="color: #000; font-size: 1.2rem;">${consulta}</p>
        <br><br>
        <p style="color:dimgrey; font-weight: bold;">Teléfono: ${telefono}</p>
        <br>
        <p style="color:dimgrey; font-weight: bold;">Email: ${mail}</p>
        <br>
        <p style="color: goldenrod; font-size: 1.5rem; font-weight: bold;">Atte Sr/a : ${nombre}</p>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log("enviado " + info.response);
        }
    });

    res.redirect('exito');
    console.log('mensaje enviado');

}

module.exports = controller;