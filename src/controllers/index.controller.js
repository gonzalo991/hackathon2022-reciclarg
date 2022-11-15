const controller = {}


controller.index = async (req, res) => {

    const response = await fetch('http://localhost:3004/infoContenedores');
    const contenedores = await response.json();

    res.render('index', {
        results: contenedores
    })

}


module.exports = controller;