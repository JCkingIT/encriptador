
imagen();
window.addEventListener("resize", imagen);

// Función para mostrar la imagen corespodiente con el tamaño de pantalla
function imagen() {
    let img = document.getElementById("img-munieco");
    screen.width > 768 ? (img.src = "img/Muñeco.png") : (img.src = "");
}

function encriptar() {
    const mensaje = document.getElementById("mensaje").value;
    let texto = mensaje
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    mostrarMensaje(texto);
}

function desencriptar() {
    const mensaje = document.getElementById("mensaje").value;
    let texto = mensaje
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    mostrarMensaje(texto);
}

function mostrarMensaje(texto = "") {
    const contenedorImagen = document.querySelector(".contenedor-mensaje");
    let contenedorMensaje = document.querySelector(".contenedor-salida");
    const mensajeCifrado = document.getElementById("encriptado");

    if (texto != "") {
        contenedorImagen.classList.remove("mostrar");
        contenedorImagen.classList.add("ocultar");
        contenedorMensaje.classList.remove("ocultar");
        contenedorMensaje.classList.add("mostrar");
        mensajeCifrado.innerText = texto;
    } else {
        contenedorImagen.classList.remove("ocultar");
        contenedorImagen.classList.add("mostrar");
        contenedorMensaje.classList.remove("mostrar");
        contenedorMensaje.classList.add("ocultar");
        mensajeCifrado.innerText = texto;
    }
}

const copiar = async () => {
    const texto = document.getElementById("encriptado").value;
    navigator.clipboard.writeText(texto);
    Swal.fire({
        title: 'Texto copiado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
    })
}

function limpiar() {
    document.getElementById('mensaje').value = "";
    mostrarMensaje();
    document.querySelector('.limpiar').classList.add("ocultar");
}

//Evento para mostrar boton de limpiar
document.getElementById("mensaje").addEventListener('keyup', (event) => {
    const icon = document.querySelector(".limpiar");
    event.target.value == "" ? icon.classList.add("ocultar") : icon.classList.remove("ocultar");
});

//Evento para aceptar solo letras miniscular y nuemeros
document.getElementById("mensaje").addEventListener('keypress', (event) => {
    let caracter = new RegExp("^[a-z0-9(). ]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!caracter.test(key)) {
        event.preventDefault();
        return false;
    }
});
