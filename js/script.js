imagen();
window.addEventListener("resize", imagen);

// Función para mostrar la imagen corespodiente con el tamaño de pantalla
function imagen() {
    let img = document.getElementById("img-munieco");
    screen.width > 768 ? (img.src = "img/Muñeco.png") : (img.src = "");
}

function encriptar() {
    const mensaje = document.getElementById("mensaje");
    let texto = mensaje.value.replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    mostrar_mensaje(texto);
}

function mostrar_mensaje(texto) {
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