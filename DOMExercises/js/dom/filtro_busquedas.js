const $d = document

export default function search(cards, input) {
	$d.addEventListener('keyup', (e) => {
		if (e.target.matches(input)) {

      // configurando tecla escape
      if (e.key === 'Escape')
        e.target.value = ''

			$d.querySelectorAll(cards).forEach((element) =>
				element.textContent.toLowerCase().includes(e.target.value)
					? element.classList.remove('filter')
					: element.classList.add('filter')
			)
		}
	})

	console.log(search)
	console.log($cards)
	s
}
