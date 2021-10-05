/* Si es necesario el .js de los archivos al importar */
import countDown from "./dom/cuenta_regresiva.js"
import hamburgerMenu from "./dom/menu_hamburguesa.js"
import { digitalWatch, alarm } from "./dom/reloj_digital.js"
import { moveBall, shorcuts } from "./dom/teclado.js"

const $d = document

/* Evento para que se ejecute a la carga del documento */
$d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
  digitalWatch()
  alarm('assets/alarma.mp3', '#star-alarm', '#stop-alarm')
  countDown('countdown', 'Sep 03, 2022 01:00:00', 'Feliz Cumpleaños pasala super y rcuerda que ¡Te estas volviendo viejooo...! 👽')
})

/*
keydown => Evento que se ejecuta cuando presiono la tecla
keyup => Evento que se ejecuta cuando suelto la tecla
keypress => Evento que se ejecuta mientras tanga presionada la tecla */
$d.addEventListener('keydown', e => {
  shorcuts(e)
  moveBall(e, '.ball', '.stage')
})

