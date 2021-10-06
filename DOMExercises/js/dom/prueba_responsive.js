const $d = document

export default function responsiveTester(form) {
	const $form = $d.getElementById(form)
	// Variable para guardar la referencia de la ventana que se abrira
	let tester

	$d.addEventListener('submit', (e) => {
		// otra manera de verificar el selector pasado es valido, para saber quien desencadeno el evento sin matches es la siguiente
		if (e.target === $form) {
			e.preventDefault()
			// alert('Foemulario enviado')
			// direccion es el nombre que le dimos al input
			tester = window.open(
				$form.direccion.value,
				'tester',
				`innerWidth =${$form.ancho.value}, innerHeight=${$form.alto.value}`
			)
		}
	})

  $d.addEventListener('click', e => {
    if (e.target === $form.cerrar)
      tester.close()
  })
}
