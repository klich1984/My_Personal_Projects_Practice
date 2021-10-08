const $d = document,
	$n = navigator

export default function webCam(id) {
	const $video = $d.getElementById(id)

	$n.mediaDevices
		.getUserMedia({ video: true, audio: true })
		.then(media => {
      $video.srcObject = media
      $video.play()
      // console.log('media', media)
    })
		.catch((err) => {
      // console.log('Error', err)
			$video.insertAdjacentHTML(
				'beforebegin',
				`<div><mark>¡Ups! Ocurrio el siguiente error: ${err}</mark></div>`
			)
		})
}
