document.getElementById("myForm").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    if (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        event.preventDefault();
        return;
    }

    if (apellido.trim() === "") {
        alert("Por favor, ingrese su apellido.");
        event.preventDefault();
        return;
    }

    if (email.trim() === "") {
        alert("Por favor, ingrese su email.");
        event.preventDefault();
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        event.preventDefault();
        return;
    }

    alert("Formulario enviado con éxito!");
});