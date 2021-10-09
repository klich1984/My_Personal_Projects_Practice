const $d = document

export default function slider() {
	const $sliders = $d.querySelectorAll('.slider-slide'),
		$prev = $d.querySelector('.prev'),
		$next = $d.querySelector('.next')

	let i = 0
	$d.addEventListener('click', (e) => {
    // btn prev
		if (e.target === $prev) {
			e.preventDefault()
			$sliders[i].classList.remove('active')
			i--

			if (i < 0) i = $sliders.length - 1

      $sliders[i].classList.add('active')
		}

    // btn next
		if (e.target === $next) {
			e.preventDefault()
			$sliders[i].classList.remove('active')
			i++

			if (i >= $sliders.length) i = 0

      $sliders[i].classList.add('active')
		}
	})
}
