const $d = document,
	n = navigator,
	ua = n.userAgent

export default function userDeviceInfo(id) {
	// console.log(ua);
	const $id = $d.getElementById(id),
		// Para saber si la visita es desde un mobil
		isMobile = {
			android: () => ua.match(/android/i),
			ios: () => ua.match(/iphone|ipad|ipod/i),
			windows: () => ua.match(/windows phone/i),
			// se usa una funcion anonima y no arrowfunction por que usare el contexto de este objeto
			any: function () {
				return this.android() || this.ios || this.windows()
			},
		},
		// Para saber si la visita es desde una computadora de escritorio
		isDesktop = {
			linux: () => ua.match(/linux/i),
			mac: () => ua.match(/mac os/i),
			windows: () => ua.match(/windows nt/i),
			// se usa una funcion anonima y no arrowfunction por que usare el contexto de este objeto
			any: function () {
				return this.linux() || this.mac || this.windows()
			},
		},
		// detecta que navegador
		isBrowser = {
			chrome: () => ua.match(/chrome/i),
			safari: () => ua.match(/safari/i),
			firefox: () => ua.match(/firefox/i),
			opera: () => ua.match(/opera|opera mini/i),
			ie: () => ua.match(/msie|iemobile/i),
			edge: () => ua.match(/edge/i),
			// se usa una funcion anonima y no arrowfunction por que usare el contexto de este objeto
			any: function () {
				return (
					this.chrome() ||
					this.safari ||
					this.firefox() ||
					this.opera() ||
					this.ie() ||
					this.edge()
				)
			},
		}
	console.log(isMobile.android())
	console.log(isMobile.ios())
	console.log(isMobile.any())
	$id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
			isMobile.any() ? isMobile.any() : isDesktop.any()
		}</b></li>
    <li>Plataforma: <b>${isBrowser.any()}</b></li>
  </ul>`

	/* Contenido exclusivo */
	if (isBrowser.chrome())
		$id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
	if (isBrowser.firefox())
		$id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
	if (isDesktop.linux())
		$id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`
	if (isDesktop.windows())
		$id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`
	if (isDesktop.mac())
		$id.innerHTML += `<p><mark>Descarga nuestro software para Mac</mark></p>`

  /* Redireccion */
  if (isMobile.android())
    window.location.href = `https://carlosum369.com/portfolio`
}
