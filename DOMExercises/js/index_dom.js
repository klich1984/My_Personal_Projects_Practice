/* Si es necesario el .js de los archivos al importar */
import hamburgerMenu from "./dom/menu_hamburguesa.js";

const $d = document

/* Evento para que se ejecute a la carga del documento */
$d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
})

