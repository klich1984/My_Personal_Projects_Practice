/* Si es necesario el .js de los archivos al importar */
import scrollTopButton from './dom/boton_scroll.js'
import countDown from './dom/cuenta_regresiva.js'
import userDeviceInfo from './dom/deteccion _dispositivos.js'
import networkStatus from './dom/deteccion_red.js'
import webCam from './dom/deteccion_webcam.js'
import hamburgerMenu from './dom/menu_hamburguesa.js'
import responsiveMedia from './dom/objeto_responsive.js'
import responsiveTester from './dom/prueba_responsive.js'
import { digitalWatch, alarm } from './dom/reloj_digital.js'
import { moveBall, shorcuts } from './dom/teclado.js'
import darkTheme from './dom/tema_oscuro.js'

const $d = document

/* Evento para que se ejecute a la carga del documento */
$d.addEventListener('DOMContentLoaded', (e) => {
	hamburgerMenu('.panel-btn', '.panel', '.menu a')
	digitalWatch()
	alarm('assets/alarma.mp3', '#star-alarm', '#stop-alarm')
	countDown(
		'countdown',
		'Sep 03, 2022 01:00:00',
		'Feliz Cumpleaños pasala super y rcuerda que ¡Te estas volviendo viejooo...! 👽'
	)
	scrollTopButton('.scroll-top-btn')
	responsiveMedia(
		'youtube',
		'(min-width: 1024px)',
		`<a href="https://www.youtube.com/watch?v=m6Gt2D5mbrU&list=PLOHmpj2UkIe1LftFaQ28wDiIekP_GAeTu&index=26" target="_blank" rel="noopener">Ver Video</a>`,
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/m6Gt2D5mbrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	)
	responsiveMedia(
		'gmaps',
		'(min-width: 1024px)',
		`<a href="https://goo.gl/maps/Gi1wS7qGdcmK6m2q6" target="_blank" rel="noopener">Ver Mapa</a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74073834557!2d-75.65125209709198!3d6.24419882131964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1633540981257!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
	)
  responsiveTester('responsive-tester')
  userDeviceInfo('user-device')
	webCam('web-cam')
})

/*
keydown => Evento que se ejecuta cuando presiono la tecla
keyup => Evento que se ejecuta cuando suelto la tecla
keypress => Evento que se ejecuta mientras tanga presionada la tecla */
$d.addEventListener('keydown', (e) => {
	shorcuts(e)
	moveBall(e, '.ball', '.stage')
})

darkTheme('.dark-theme-btn', 'dark-mode')
networkStatus()