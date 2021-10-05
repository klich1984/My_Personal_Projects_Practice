/* Si es necesario el .js de los archivos al importar */
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalWatch, alarm } from "./dom/reloj_digital.js";

const $d = document

/* Evento para que se ejecute a la carga del documento */
$d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
  digitalWatch()
  alarm('assets/alarma.mp3', '#star-alarm', '#stop-alarm')
})

