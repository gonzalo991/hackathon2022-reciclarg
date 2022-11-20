const validarCampo = (input, callback) => {
    //atrapo el valor del input
    const { value } = input;
    const span = input.parentElement.querySelector("span.errMsg");

    const msg = callback(value);

    //Seteo el mensaje a la etiqueta personalizada en html
    input.setCustomValidity(msg);

    //agrego el valor a la etiqueta span del html
    span.innerText = msg;

    //en caso de ser válido o no agrego o quito las clases valid o invalid
    if (!msg) {
        input.classList.add("valid");
        input.calssList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}

const form = document.querySelector("#form");

form.nombre.addEventListener("blur", ev => {
    const callback = (value) => {

        const regExp = /^[\w\s]{3,}$/
        let msg = "";
        if (!regExp.test(value)) {
            msg = "El nombre debe contener entre 3 y 30 caracteres alfanuméricos"
        }
        return msg;
    }

    validarCampo(ev.target, callback);

});

form.mail.addEventListener("input", ev => {
    const callback = (value) => {
        const regExp = /^[\w._-]+@[\w-]+\.[\w]+(\.[w]+)?$/; //Expresión regylar para validar el email ejemplo@dominio.com.ar

        let msg = "";

        if (!regExp.test(value)) {
            msg = "El email no es válido";
        }

        return msg;
    }

    validarCampo(ev.target, callback);
});

form.telefono.addEventListener("input", ev => {

    const callback = (value) => {
        const regExp = /^[\+\[0-9]{2,4}]?[0-9]{2,5}?[\s-]?[0-9]{6,9}$/; //Expresión regylar para validar el email ejemplo@dominio.com.ar

        let msg = "";

        if (!regExp.test(value)) {
            msg = "El nro de telefono no es válido";
        }

        return msg;
    }

    validarCampo(ev.target, callback);

})

form.asunto.addEventListener("blur", ev => {
    const callback = (value) => {
        const regExp = /^[\w\s][a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,150}$/; //Expresión regylar para validar el email ejemplo@dominio.com.ar

        let msg = "";

        if (!regExp.test(value)) {
            msg = "Este campo es obligatorio";
        }

        return msg;
    }

    validarCampo(ev.target, callback);
})