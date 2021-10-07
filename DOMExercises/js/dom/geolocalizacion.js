const $d = document,
	$n = navigator

export default function getGeolocation(id) {
	const $conten = $d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

	const success = (success) => {
    let coords = success.coords
		$conten.innerHTML = `
    <p>Tu posición actual es:</p>
    <p>Latitud: <b>${coords.latitude}</b></p>
    <p>Longitud: <b>${coords.longitude}</b></p>
    <p>Precisión: <b>${coords.accuracy}</b> metros</p>
    <br>
    <a href='https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z' target='_blank' rel='noopener'>Ver en google Maps</a>
    `
	}

	const err = (err) => {
		$conten.innerHTML = `
      <mark>¡Ups! A ocurrido el siguiente error: <b>${err.message}</b></mark>
    `
	}

	if ('geolocation' in $n) {
		$n.geolocation.getCurrentPosition(success, err, options)
    // watchPosition mira si hay cambios y se actualiza
		// console.log($n.geolocation.watchPosition())
	} else {
    `<mark>la geolocalización NO está disponible</mark>`
	}
}
