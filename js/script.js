

let ocultarTexto_btn = document.getElementById ("ocultarTexto_btn");

let ocultarTexto = document.getElementById ("ocultarTexto");


ocultarTexto_btn.addEventListener("click", toggleText);

function toggleText() {
    ocultarTexto.classList.toggle("mostrar");
}